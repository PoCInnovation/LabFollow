import { apolloFetch } from './index'

export function loginPatient(email, password) {
  return new Promise((resolve, reject) => {

    const query = `
      mutation getPatientToken ($email: String!, $password: String!) {
        loginPatient (
          email: $email
          password: $password
        ) {
          token
        }
      }
    `;
    const variables = {
      email: email,
      password: password,
    };

    return apolloFetch({ query, variables })
      .then(res => {
        resolve(res.data.loginPatient.token);
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
  })
}