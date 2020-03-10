import { rule, shield } from 'graphql-shield'
import { getUserId } from '../utils'

const rules = {
  isAuthenticatedDoctor: rule()((parent, args, context) => {
    const doctorId = getUserId(context)
    return Boolean(doctorId)
  }),
  isAuthenticatedPatient: rule()((parent, args, context) => {
    const patientId = getUserId(context)
    return Boolean(patientId)
  }),
  isResponsiblDoctor: rule()(async (parent, { id }, context) => {
    const doctorId = getUserId(context)
    const submitter = await context.prisma.survey({ id }).submitter()
    return doctorId === submitter.id
  }),
}

export const permissions = shield({
  Query: {
    meDoctor: rules.isAuthenticatedDoctor,
    mePatient: rules.isAuthenticatedPatient,
  },
  Mutation: {
    createDraftSurvey: rules.isAuthenticatedDoctor,
    addDoctorToPatient: rules.isAuthenticatedDoctor,
    deleteDoctor: rules.isResponsiblDoctor,
    deleteSurvey: rules.isResponsiblDoctor,
    publishSurvey: rules.isResponsiblDoctor,
    unpublishSurvey: rules.isResponsiblDoctor,
  },
})
