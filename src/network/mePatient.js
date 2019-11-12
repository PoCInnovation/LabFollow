import { apolloFetch } from './index'

export function fetchMePatient(token) {

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
            submitter { name }
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
      return (res.data.mePatient);
    })
    .catch(err => {
      console.log(err)
      return (err)
    })
}
