import { stringArg, idArg, mutationType } from 'nexus'
import { hash, compare } from 'bcrypt'
import { APP_SECRET, getUserId } from '../utils'
import { sign } from 'jsonwebtoken'

export const Mutation = mutationType({
  definition(t) {

    t.field('signupDoctor', {
      type: 'AuthPayloadDoctors',
      args: {
        name: stringArg({ nullable: false }),
        email: stringArg({ nullable: false }),
        speciality: stringArg({ nullable: false }),
        password: stringArg({ nullable: false }),
      },
      resolve: async (parent, { name, email, speciality, password }, ctx) => {
        const hashedPassword = await hash(password, 10)
        const doctor = await ctx.prisma.createDoctor({
          name,
          email,
          speciality,
          password: hashedPassword,
        })
        return {
          token: sign({ userId: doctor.id }, APP_SECRET),
          doctor,
        }
      },
    })

    t.field('loginDoctor', {
      type: 'AuthPayloadDoctors',
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (parent, { email, password }, context) => {
        const doctor = await context.prisma.doctor({ email })
        if (!doctor) {
          throw new Error(`No user found for email: ${email}`)
        }
        const passwordValid = await compare(password, doctor.password)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }
        return {
          token: sign({ userId: doctor.id }, APP_SECRET),
          doctor,
        }
      },
    })

    t.field('signupPatient', {
      type: 'AuthPayloadPatients',
      args: {
        name: stringArg({ nullable: false }),
        email: stringArg({ nullable: false }),
        birthday: stringArg({ nullable: false }),
        password: stringArg({ nullable: false }),
      },
      resolve: async (parent, { name, email, birthday, password }, ctx) => {
        const hashedPassword = await hash(password, 10)
        const patient = await ctx.prisma.createPatient({
          name,
          email,
          birthday,
          password: hashedPassword,
        })
        await ctx.prisma.createSurvey({
          title: 'Tutoriel: Bienvenue dans LabFollow !',
          content: '',
          submitter: { connect: { email: 'administrator@labfollow.com' } },
          patient: { connect: { email: email } }
        })
        return {
          token: sign({ userId: patient.id }, APP_SECRET),
          patient,
        }
      },
    })

    t.field('loginPatient', {
      type: 'AuthPayloadPatients',
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (parent, { email, password }, context) => {
        const patient = await context.prisma.patient({ email })
        if (!patient) {
          throw new Error(`No user found for email: ${email}`)
        }
        const passwordValid = await compare(password, patient.password)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }
        return {
          token: sign({ userId: patient.id }, APP_SECRET),
          patient,
        }
      },
    })

    t.field('editPatient', {
      type: 'AuthPayloadPatients',
      args: {
        id: idArg(),
        name: stringArg({ nullable: false }),
        email: stringArg({ nullable: false }),
        birthday: stringArg({ nullable: false }),
      },
      resolve: (parent, { id, name, email, birthday }, ctx) => {
        return ctx.prisma.updatePatient({
          where: { id },
          data: {
            name: name,
            email: email,
            birthday: birthday,
          },
        })
      },
    })

    t.field('createDraftSurvey', {
      type: 'Survey',
      args: {
        title: stringArg({ nullable: false }),
        content: stringArg({ nullable: false }),
        submitterEmail: stringArg({ nullable: false }),
        patientEmail: stringArg({ nullable: false }),
      },
      resolve: (parent, { title, content, submitterEmail, patientEmail }, ctx) => {
        const doctorId = getUserId(ctx)
        return ctx.prisma.createSurvey({
          title,
          content,
          submitter: { connect: { id: doctorId } },
          patient: { connect: { email: patientEmail } },
        })
      },
    })

    t.field('publishSurvey', {
      type: 'Survey',
      nullable: true,
      args: {
        id: idArg(),
      },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.updateSurvey({
          where: { id },
          data: { published: true },
        })
      },
    })

    t.field('unpublishSurvey', {
      type: 'Survey',
      nullable: true,
      args: {
        id: idArg(),
      },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.updateSurvey({
          where: { id },
          data: { published: false },
        })
      },
    })

    t.field('markReadSurvey', {
      type: 'Survey',
      nullable: true,
      args: {
        id: idArg(),
      },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.updateSurvey({
          where: { id },
          data: { answered: true },
        })
      },
    })

    t.field('addDoctorToPatient', {
      type: 'Doctor',
      nullable: true,
      args: {
        id: idArg(),
        patientEmail: stringArg()
      },
      resolve: (parent, { id, patientEmail }, ctx) => {
        return ctx.prisma.updateDoctor({
          where: { id },
          data: {
            patients: {
              connect: { email: patientEmail },
            }
          },
        })
      },
    })

    t.field('deleteSurvey', {
      type: 'Survey',
      nullable: true,
      args: {
        id: idArg(),
      },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.deleteSurvey({ id })
      },
    })

    t.field('deleteDoctor', {
      type: 'Doctor',
      nullable: true,
      args: {
        id: idArg(),
      },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.deleteDoctor({ id })
      },
    })

    t.field('deletePatient', {
      type: 'Patient',
      nullable: true,
      args: {
        id: idArg(),
      },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.deletePatient({ id })
      },
    })
  },
})