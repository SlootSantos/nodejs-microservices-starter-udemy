const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Query {
    mails: [Mail]
    mail(id: String!): Mail
  }

  type Mutation {
    mail(subject: String!, receiver: String!, content: String!): Mail
  }

  type Mail {
    subject: String
    receiver: String
    content: String
    _id: String
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
