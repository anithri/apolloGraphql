export default class User {
  constructor(args) {
    this.id = args.id
    this.name = args.name
  }

  static all(docClient) {
    return docClient
      .scan({TableName: 'Users'})
      .promise()
      .then(result => {
        return {items: result.Items.map(i => new Index(i))}
      })
  }

  static get(docClient, args) {}
}
