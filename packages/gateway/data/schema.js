const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
  type Query { hey: String! }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
