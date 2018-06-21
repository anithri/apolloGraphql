const cardTypes = `
  type Card {
    id: ID! @isUnique
    name: String!
    requirements: [Worker]
  }
 
  type CardConnection {
    items: [Card!]!
  }
  
  extend type Query {
    card(id: ID!): Card
    cards: CardConnection
  }
`

export default cardTypes
