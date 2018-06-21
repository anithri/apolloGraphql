const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;
import typeDefs from './types'
import resolvers from './resolvers'

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
