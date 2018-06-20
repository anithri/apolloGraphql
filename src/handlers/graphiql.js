import {graphiqlLambda} from  'apollo-server-lambda'

exports.graphiql = graphiqlLambda({
  endpointURL: './graphql'
});
