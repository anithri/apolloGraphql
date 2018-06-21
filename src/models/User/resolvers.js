import User from './class'
import { getAll, getItem } from 'utils/mapper'

const Query = {
  user: (root, args) => getItem('Users', args.id, User),
  users: (root, args) => getAll('Users', User),
}

const Mutation = {}

// eslint-disable-next-line import/prefer-default-export
const resolvers = {
  Query,
}

export default resolvers
