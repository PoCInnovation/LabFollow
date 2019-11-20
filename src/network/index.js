import { createApolloFetch } from 'apollo-fetch';

export const uri = 'http://10.138.11.250:4000/'
export const apolloFetch = createApolloFetch({ uri });