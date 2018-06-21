import { cardTypes } from 'models/Card'
import { gameTypes } from 'models/Game'
import { userTypes } from 'models/User'
import { workerTypes } from 'models/Worker'

const queryType = `
  type Query {
    one: String
  }
`

export default [queryType, cardTypes, gameTypes, userTypes, workerTypes]
