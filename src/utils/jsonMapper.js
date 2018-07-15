export default function jsonMapper(jsonData, modelClass, ...classArgs) {

  const all = jsonData.items.map(i => new modelClass(i, ...classArgs))
  const byId = all.reduce((hsh, item) => {
    hsh[item.id] = item
    return hsh
  }, {})

  return {
    getItem: function(root, args) {
      return byId[args.id]
    },
    getAll: function(root, args) {
      return {items: all}
    },
  }
}
