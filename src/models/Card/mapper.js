import CardData from './data.json'
import Card from './base'
import {getWorker} from 'models/Worker/mapper'
import jsonMapper from 'utils/jsonMapper'

export const {getItem: getCard, getAll: getCards} = jsonMapper(CardData, Card, getWorker)
