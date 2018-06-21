import CardData from './data.json'
import Card from './base'
import {getWorker} from 'models/Worker/mapper'

const cards = CardData.items.map(w => new Card(w, getWorker))

const cardsById = cards.reduce((hsh, card) => {
  hsh[card.id] = card
  return hsh
}, {})

export function getCards(root, args) {
  return cards
}
export function getCard(root, args) {
  return cardsById[args.id]
}
