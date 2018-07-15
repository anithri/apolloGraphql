import Player from './base'
import { getItem } from 'utils/dynamoMapper'

export const getPlayer = (root, args) => getItem('Players', args.id, Player)
