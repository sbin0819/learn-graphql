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

### 2. resolvers

1. args

```
 login: async (parent, { userInfo: { username } }, context, info) => {
      return username;
    },
```

2. parent

```
  User: {
    firstLetterOfUsername: (parent) => {
      return parent.username[0];
    },
    // username: (parent) => {
    //   // return  'i am username',
    //   return parent.username[0];
    // },
  },
```

playground

```
mutation{
  register(userInfo:{username: "kim", password:"aser"}) {
    user {
      id
      username
      firstLetterOfUsername
    }
  }
}
```

### Short Definitaion

#### typeDefs, Resolvers

**typeDefs**
type definitions

**resolvers**
resolver functions

- A resolver can optionally accept four positional arguments: (parent, args, context, info)
  - parent
    The return value of the resolver for this field's parent (i.e., the previous resolver in the resolver chain).
  - args
    An object that contains all GraphQL arguments provided for this field.
  - context
    An object shared across all resolvers that are executing for a particular operation. Use this to share per-operation state, including authentication information, dataloader instances, and anything else to track across resolvers.
  - info
    not now

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
