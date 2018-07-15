import User from './base'
import { getAll, getItem } from 'utils/dynamoMapper'
import sampleSize from 'lodash/sampleSize'
export const getUsers = (root, args) => getAll('Users', User)
export const getUser = (root, args) => getItem('Users', args.id, User)
export const randomUsers = (count) => sampleSize(getUsers(),count)