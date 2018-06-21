const workerTypes = `
  type Worker {
    id: ID! @isUnique
    name: String!
  }
 
  type WorkerConnection {
    items: [Worker!]!
  }
`

export default workerTypes
