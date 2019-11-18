import { apolloFetch } from './index'

export async function fetchMePatient(token) {

  const query = `
      query getPatientInfo {
        mePatient {
          doctors {
            id
            name
            email
          }
          id
          name
          email
          surveys {
            id
            title
            content
            submitter { name email }
            createdAt
          }
        }
      }
    `;

  apolloFetch.use(({ request, options }, next) => {
    if (!options.headers) { options.headers = {}; }
    options.headers['authorization'] = token;
    next();
  });

  return apolloFetch({ query })
    .then(res => {
      return (res);
    })
    .catch(err => {
      console.log(err)
      return (err)
    })
}
