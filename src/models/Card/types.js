const cardTypes = `
  type Card {
    id: ID! @isUnique
    name: String!
    requirements: [Worker]
  }
 
  type CardConnection {
    items: [Card!]!
  }
`

export default cardTypes
