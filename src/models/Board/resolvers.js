import { getBoard } from './mapper'
import {createBoard} from './mutations'
const Query = {
  board: getBoard,
}

const Mutation = {
  createBoard
}

// eslint-disable-next-line import/prefer-default-export
const resolvers = {
  Query,
  Mutation
}

export default resolvers
