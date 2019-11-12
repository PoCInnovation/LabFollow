import { apolloFetch } from './index'

export function fetchMePatient(token, context) {

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
      console.log(res.data.mePatient)
      context.updateName(res.data.mePatient.name)
      context.updateEmail(res.data.mePatient.email)
      resolve(res.data.mePatient);
    })
    .catch(err => {
      console.log(err)
      reject(err)
    })
}
