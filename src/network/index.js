import { createApolloFetch } from 'apollo-fetch';

export const uri = 'http://10.138.43.235:4000/'
export const apolloFetch = createApolloFetch({ uri });