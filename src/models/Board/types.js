const boardTypes = `
  type Board {
    id: ID! @isUnique
    name: String!
  }
  
  extend type Query {
    board: Board
  }
`

export default boardTypes
