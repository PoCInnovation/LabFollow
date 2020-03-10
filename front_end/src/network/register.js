import { apolloFetch } from './index'

export async function signupPatient(name, email, password, birthday) {

  const query = `
      mutation createPatientToken ($email: String!, $password: String!, $name: String!, $birthday: String!) {
        signupPatient (
          name: $name
          email: $email
          password: $password
          birthday: $birthday
        ) {
          token
          patient {
            id
            email
            birthday
            name
            surveys {
              id
              title
              content
              submitter { name email }
              createdAt
            }
          }
        }
      }
    `;

  const variables = {
    name, name,
    email: email,
    password: password,
    birthday: birthday,
  };

  return apolloFetch({ query, variables })
    .then(res => {
      return (res);
    })
    .catch(err => {
      console.log(err)
      return (err)
    })
}