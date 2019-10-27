import { createApolloFetch } from 'apollo-fetch';

export const uri = 'http://192.168.1.68:4000/'
export const apolloFetch = createApolloFetch({ uri });