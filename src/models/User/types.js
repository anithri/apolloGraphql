const userTypes = `
  type User {
    id: ID! @isUnique
    name: String!
  }
  
  type UserConnection {
    items: [User!]!
  }
  
  extend type Query {
    user: User
    users: UserConnection
  }
`

export default userTypes
