const gameTypes = `
  type Game {
    id: ID! @isUnique
    name: String!
  }
  
  extend type Query {
    game: Game
  }
`

export default gameTypes
