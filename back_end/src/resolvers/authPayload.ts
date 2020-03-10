import { objectType } from 'nexus'

export const AuthPayloadDoctors = objectType({
  name: 'AuthPayloadDoctors',
  definition(t) {
    t.string('token')
    t.field('doctor', { type: 'Doctor' })
  },
})

export const AuthPayloadPatients = objectType({
  name: 'AuthPayloadPatients',
  definition(t) {
    t.string('token')
    t.field('patient', { type: 'Patient' })
  },
})
