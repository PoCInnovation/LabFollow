# LabFollow_BackEnd: GraphQL Apollo Server

## How to use

### 1. Install Node dependencies:

```
npm install
```

### 2. Install the Prisma CLI

To run the example, you need the Prisma CLI. Please install it via NPM or [using another method](https://www.prisma.io/docs/prisma-cli-and-configuration/using-the-prisma-cli-alx4/#installation):

```
sudo npm install -g prisma
```

### 3. Set up database & deploy Prisma datamodel

1. Ensure you have Docker installed on your machine. If not, you can get it from [here](https://store.docker.com/search?offering=community&type=edition).
1. Create `docker-compose.yml` for MySQL (see [here](https://www.prisma.io/docs/prisma-server/database-connector-POSTGRES-jgfr/) for Postgres):
    ```yml
    version: '3'
    services:
      prisma:
        image: prismagraphql/prisma:1.34
        restart: always
        ports:
        - "4466:4466"
        environment:
          PRISMA_CONFIG: |
            port: 4466
            databases:
              default:
                connector: mysql
                host: mysql
                port: 3306
                user: root
                password: prisma
                migrations: true
      mysql:
        image: mysql:5.7
        restart: always
        environment:
          MYSQL_ROOT_PASSWORD: prisma
        volumes:
          - mysql:/var/lib/mysql
    volumes:
      mysql:
    ```
1. Run `docker-compose up -d`
1. Set the `endpoint` in `prisma.yml` to `http://localhost:4466`
1. Run `prisma deploy`


You can now use [Prisma Admin](https://www.prisma.io/docs/prisma-admin/overview-el3e/) to view and edit your data at `http://localhost:4466/_admin` in your browser.

### 4. Start the GraphQL server

Launch your GraphQL server with this command:

```
npm start
```

Navigate to [http://localhost:4000](http://localhost:4000) in your browser to explore the API of your GraphQL server in a [GraphQL Playground](https://github.com/prisma/graphql-playground).

### 5. Using the GraphQL API

The schema that specifies the API operations of your GraphQL server is defined in [`./src/schema.graphql`](./src/schema.graphql). Below are a number of operations that you can send to the API using the GraphQL Playground.

Feel free to adjust any operation by adding or removing fields. The GraphQL Playground helps you with its auto-completion and query validation features.

#### Retrieve all published surveys and their submitters

```graphql
query {
  doctors {
    id
    name
    email
  	patients {
      id
      name
      email
    }
    surveys {
      id
      title
      content
    }
  }
}
```

<Details><Summary><strong>See more API operations</strong></Summary>

#### Create a new doctor

```graphql
mutation {
  signupDoctor(
    name: "Doctor"
    email: "doctor@poc.eu"
    password: "azerty"
  ) {
    token
    doctor {
      id
      name
      email
    }
  }
}
```

#### Log into doctor's account

```graphql
mutation {
  loginDoctor(
    email: "doctor@poc.eu"
    password: "azerty"
  ) {
    token
  }
}
```
> **Note**: You need to keep this token for the following doctors' queries

#### Create a new patient

```graphql
mutation {
  signupPatient(
    name: "Jean"
    email: "jean@epitech.eu"
    password: "azerty"
    doctor: {
      connect: {
        email: "doctor@poc.eu"
      }
    }
  ) {
    token
    patient {
      id
      name
      email
    }
  }
}
```

#### Log into patient's account

```graphql
mutation {
  loginPatient(
    email: "jean@epitech.eu"
    password: "azerty"
  ) {
    token
  }
}
```
> **Note**: You need to keep this token for the following patients' queries

#### Create a new survey

```graphql
mutation {
  createDraftSurvey(
    title: "Suivi post opération"
    content: "Merci de remplir ce formulair"
    submitterEmail: "doctor@poc.eu"
    patientEmail: "jean@epitech.eu"
  ) {
    id
    content
    title
    published
    submitter {
      id
      email
      name
    }
  }
}
```
> **Note**: You need to be a logged doctor to be able to perform this query.

#### Publish an existing draft

```graphql
mutation {
  publishSurvey(id: "__POST_ID__") {
    id
    title
    content
    published
  }
}
```
> **Note**: You need to be the creator of the survey to change it's status.

#### Search for surveys with a specific title or content

```graphql
{
  filterSurveys(searchString: "graphql") {
    id
    title
    content
    published
    submitter {
      id
      name
      email
    }
  }
}
```

#### Retrieve a single survey

```graphql
{
  survey(id: "__POST_ID__") {
    id
    title
    content
    published
    submitter {
      id
      name
      email
    }
  }
}
```

#### Delete a survey

```graphql
mutation {
  deleteSurvey(
    id: "__POST_ID__"
  ) {
    id
  }
}
```
> **Note**: You need to be the creator of the survey to change delete it.


#### Add a doctor to a patient

```graphql
mutation {
  addDoctorToPatient(
    id: "doctor@poc.eu"
    patientEmail: "jean@epitech.eu"
  ) {
    patients {
      id
      name
      email
      doctor {
        id
        name
        email
      }
    }
  }
}
```
> **Note**: You need to be a logged doctor to be able to perform this mutation.


</Details>

### 6. Changing the GraphQL schema

To make changes to the GraphQL schema, you need to manipulate the `Query` and `Mutation` types that are defined in [`index.ts`](./src/index.ts).

Note that the [`start`](./package.json#L6) script also starts a development server that automatically updates your schema every time you save a file. This way, the auto-generated [GraphQL schema](./src/generated/schema.graphql) updates whenever you make changes in to the `Query` or `Mutation` types inside your TypeScript code.