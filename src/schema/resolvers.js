import dynamodb from 'serverless-dynamodb-client'
import { userResolvers } from 'models/User'
import { workerResolvers } from 'models/Worker'
import { cardResolvers } from 'models/Card'
import {gameResolvers} from 'models/Game'

const resolvers = {
  Query: {
    ...cardResolvers.Query,
    ...gameResolvers.Query,
    ...userResolvers.Query,
    ...workerResolvers.Query,
  },
  // Mutation: {
  //   ...cardResolvers.Mutation,
  //   ...gameResolvers.Mutation,
  //   ...userResolvers.Mutation,
  //   ...workerResolvers.Mutation,
  // },

}

export default resolvers
