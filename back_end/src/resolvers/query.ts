import { getUserId } from '../utils'
import { stringArg, idArg, queryType } from 'nexus'

export const Query = queryType({
  definition(t) {

    t.field('meDoctor', {
      type: 'Doctor',
      resolve: (parent, args, ctx) => {
        const doctorId = getUserId(ctx)
        return ctx.prisma.doctor({ id: doctorId })
      },
    })

    t.field('mePatient', {
      type: 'Patient',
      resolve: (parent, args, ctx) => {
        const patientId = getUserId(ctx)
        return ctx.prisma.patient({ id: patientId })
      },
    })

    t.list.field('surveys', {
      type: 'Survey',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.surveys()
      },
    })

    t.list.field('surveysPublished', {
      type: 'Survey',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.surveys({
          where: { published: true },
        })
      },
    })

    t.list.field('surveysNotPublished', {
      type: 'Survey',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.surveys({
          where: { published: false },
        })
      },
    })

    t.field('survey', {
      type: 'Survey',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.survey({ id })
      },
    })

    t.list.field('filterSurveys', {
      type: 'Survey',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.surveys({
          where: {
            OR: [
              { title_contains: searchString },
              { content_contains: searchString },
            ],
          },
        })
      },
    })

    t.list.field('doctors', {
      type: 'Doctor',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.doctors()
      },
    })

    t.field('doctor', {
      type: 'Doctor',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.doctor({ id })
      },
    })

    t.list.field('patients', {
      type: 'Patient',
      resolve: (parent, args, ctx) => {
        return ctx.prisma.patients()
      },
    })

    t.field('patient', {
      type: 'Patient',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.patient({ id })
      },
    })
  },
})