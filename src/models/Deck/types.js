const deckTypes = `
  type Deck {
    id: ID! @isUnique
    name: String!
  }
  
  extend type Query {
    deck: Deck
  }
`

export default deckTypes
