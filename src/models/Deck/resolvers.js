import { getDeck } from './mapper'
import {createDeck} from './mutations'
const Query = {
  deck: getDeck,
}

const Mutation = {
  createDeck
}

// eslint-disable-next-line import/prefer-default-export
const resolvers = {
  Query,
  Mutation
}

export default resolvers
