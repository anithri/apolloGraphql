import { cardTypes } from 'models/Card'
import { gameTypes } from 'models/Game'
import { userTypes } from 'models/User'
import { workerTypes } from 'models/Worker'

const queryType = `
  type Query {
    card(id: ID!): Card
    cards: CardConnection
    
    game(id: ID!): Game
    
    user(id: ID!): User
    users: UserConnection
    
    worker(id: ID!): Worker
    workers: WorkerConnection
  }
`

export default [queryType, cardTypes, gameTypes, userTypes, workerTypes]
