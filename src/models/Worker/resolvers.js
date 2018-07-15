import { getWorker, getWorkers } from './mapper'

const Query = {
  worker: getWorker,
  workers: getWorkers
}

const Mutation = {}

const resolvers = {
  Query,
  Mutation,
}

export default resolvers
