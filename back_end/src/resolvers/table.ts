import { prismaObjectType } from 'nexus-prisma'

export const Doctor = prismaObjectType({
  name: 'Doctor',
  definition(t) {
    t.prismaFields([
      'id',
      'email',
      'password',
      'speciality',
      'name',
      {
        name: 'patients',
        args: [],
      },
      {
        name: 'surveys',
        args: [],
      },
    ])
  },
})

export const Patient = prismaObjectType({
  name: 'Patient',
  definition(t) {
    t.prismaFields([
      'id',
      'email',
      'password',
      'name',
      'birthday',
      {
        name: 'doctors',
        args: [],
      },
      {
        name: 'surveys',
        args: [],
      },
    ])
  },
})


export const Survey = prismaObjectType({
  name: 'Survey',
  definition(t) {
    t.prismaFields([
      'id',
      'createdAt',
      'updatedAt',
      'published',
      'answered',
      'title',
      'content',
      'submitter',
      'patient'
    ])
  },
})