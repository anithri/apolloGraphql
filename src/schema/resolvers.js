import dynamodb from 'serverless-dynamodb-client'
import { userResolvers } from 'models/User'

const resolvers = {
  Query: {
    ...userResolvers.Query,
  },
}

export default resolvers
