import { getUsers, getUser } from './mapper'

const Query = {
  user: getUser,
  users: getUsers,
}

const Mutation = {}

// eslint-disable-next-line import/prefer-default-export
const resolvers = {
  Query,
}

export default resolvers
