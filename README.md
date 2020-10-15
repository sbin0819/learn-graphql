# GraphQL 101

### 1. init

terminal

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

### 참고

[Ben Awad](https://www.youtube.com/watch?v=DyvsMKsEsyE&list=PLN3n1USn4xln0j_NN9k4j5hS1thsGibKi)
