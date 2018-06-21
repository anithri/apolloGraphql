import User from './base'
import { getAll, getItem } from 'utils/dynamoMapper'

export const getUsers = (root, args) => getAll('Users', User)
export const getUser = (root, args) => getItem('Users', args.id, User)
