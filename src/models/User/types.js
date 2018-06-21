const userTypes = `
  type User {
    id: ID! @isUnique
    name: String!
  }
  
  type UserConnection {
    items: [User!]!
  }
`

export default userTypes
