const playerTypes = `
  type Player {
    id: ID! @isUnique
    name: String!
  }
  
  extend type Query {
    player: Player
  }
`

export default playerTypes
