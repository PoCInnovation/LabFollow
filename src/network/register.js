import { apolloFetch } from './index'

export function signupPatient(name, email, password) {

  const query = `
      mutation createPatientToken ($email: String!, $password: String!, $name: String!) {
        signupPatient (
          name: $name
          email: $email
          password: $password
        ) {
          token
        }
      }
    `;

  const variables = {
    name, name,
    email: email,
    password: password,
  };

  return apolloFetch({ query, variables })
    .then(res => {
      return (res.data.signupPatient.token);
    })
    .catch(err => {
      console.log(err)
      return (err)
    })
}