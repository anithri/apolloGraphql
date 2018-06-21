import { userTypes } from 'models/User'

const queryType = `
  type Query {
    user(id: ID!): User
    users: UserConnection
  }
`;

export default [queryType, userTypes]
