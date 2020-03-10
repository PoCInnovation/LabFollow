import { apolloFetch } from './index'

export async function editPatient(id, email, name, birthday) {

  const query = `
      mutation updatePatient ($id: ID, $email: String!, $name: String!, $birthday: String!) {
        editPatient (
          id: $id
          name: $name
          email: $email
          birthday: $birthday
        ) {patient{name email id birthday}}
      }
    `;

  const variables = {
    id: id,
    name: name,
    email: email,
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