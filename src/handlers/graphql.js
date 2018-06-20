'use strict';``
import {graphqlLambda} from 'apollo-server-lambda'
import schema from 'schema'

const graphql = graphqlLambda((event, context) => {
  const headers = event.headers;
  const functionName = context.functionName;

  return {
    schema: schema,
    context: {
      headers,
      functionName,
      event,
      context
    }
  };
});


export default graphql;
