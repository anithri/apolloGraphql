import { getPlayer } from './mapper'
import {createPlayer} from './mutations'
const Query = {
  player: getPlayer,
}

const Mutation = {
  createPlayer
}

// eslint-disable-next-line import/prefer-default-export
const resolvers = {
  Query,
  Mutation
}

export default resolvers
