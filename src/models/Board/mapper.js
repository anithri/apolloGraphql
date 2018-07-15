import Board from './base'
import { getItem } from 'utils/dynamoMapper'

export const getBoard = (root, args) => getItem('Boards', args.id, Board)
