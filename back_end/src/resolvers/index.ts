import { Query } from './query'
import { Mutation } from './mutation'
import { AuthPayloadDoctors, AuthPayloadPatients } from './authPayload'
import { Doctor, Survey, Patient} from './table'

export const resolvers = {
  Query,
  Doctor,
  Survey,
  Patient,
  Mutation,
  AuthPayloadDoctors,
  AuthPayloadPatients,
}