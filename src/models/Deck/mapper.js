import Deck from './base'
import { getItem } from 'utils/dynamoMapper'

export const getDeck = (root, args) => getItem('Decks', args.id, Deck)
