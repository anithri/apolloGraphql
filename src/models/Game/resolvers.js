import { getGame } from './mapper'
import {createGame} from './mutations'
const Query = {
  game: getGame,
}

const Mutation = {
  createGame
}

// eslint-disable-next-line import/prefer-default-export
const resolvers = {
  Query,
  Mutation
}

export default resolvers
