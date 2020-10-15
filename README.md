### GraphQL 101

#### basic setting

- terminal

```
yarn add apollo graphql nodemon
```

mkdir src && touch index.js

index.js

```
const { ApolloServer, gql } = require('apollo-server');

// ApolloServer -> graphQL template
// gql -> string template

const typeDefs = gql`
  // typeDefs -> type definitions
  type Query {
    hello: String!
  }
`;

const resolvers = {
  // resolvers -> resolver function
  Query: {
    hello: () => 'hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`server started at ${url}`));

```

### 2. types

1. scalar

ID, String, Int, Float, Boolean

2. custom

```
type User {
  id: ID!
  username: String!
}
```

3. List

```
 type User {
    id: ID!
    username: String!
  }
  type Error {
    field: String!
    message: String!
  }
  type RegisterResponse {
    errors: [Error]
    user: User
  }
  type Mutation {
    register: RegisterResponse!
  }
```

4. input

```
 input UserInfo {
    username: String!
    password: String!
    age: Int
  }

type Mutation {
  register(userInfo: UserInfo!): RegisterResponse!
  login(userInfo: UserInfo!): Boolean!
  }
```

**playground**

```
mutation{
  register {
    errors{
      field
      message
    }
    user {
      id
			username
    }
  }
}
```

### Short Definitaion

#### typeDefs, Resolvers

typeDefs -> type definitions
resolvers -> resolver functions

#### Query, Mutaion, Subscription

CRUD

Query -> R(ead)

Mutation -> C(reate), U(pdate), D(elete)

Subscription -> Maintain real time connnection to server

[GraphQL Queries, Mutations and Subscriptions](https://medium.com/software-insight/graphql-queries-mutations-and-subscriptions-286522b263d9)

### Recommendation

download GraphQL for VSCode in VSCode extension

### References

[Ben Awad](https://www.youtube.com/watch?v=DyvsMKsEsyE&list=PLN3n1USn4xln0j_NN9k4j5hS1thsGibKi)
