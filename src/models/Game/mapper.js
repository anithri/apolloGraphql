import Game from './base'
import { getItem } from 'utils/dynamoMapper'

export const getGame = (root, args) => getItem('Games', args.id, Game)
