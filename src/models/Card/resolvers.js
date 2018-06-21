import {getCard, getCards} from './mapper'
const Query = {
  card: getCard,
  cards: getCards,
}

const Mutation = {}

const resolvers = {
  Query,
  Mutation,
}

export default resolvers
