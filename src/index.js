const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String!
  }
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
`;

const resolvers = {
  Query: {
    hello: () => 'hello world!',
  },
  Mutation: {
    register: () => ({
      errors: [
        {
          field: 'username1',
          message: 'bad',
        },
        {
          field: 'username2',
          message: 'bad2',
        },
      ],
      user: {
        id: 1,
        username: 'bob',
      },
    }),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`server started at ${url}`));
