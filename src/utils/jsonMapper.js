export function getAll(TableName, modelClass) {
  return docClient
    .scan({TableName})
    .promise()
    .then(result => {
      return {
        items: result.Items.map(i => new modelClass(i))
      }
    })
}

export function getItem(TableName, id, modelClass) {
  return docClient
    .get({TableName, Key: {id}})
    .promise()
    .then(result => result.Item ? new modelClass(result.Item) : null)
}
