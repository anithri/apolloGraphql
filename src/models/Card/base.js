export default class Card {
  constructor(args, getWorker) {
    this.id = args.id
    this.name = args.name
    this.requirements = args.requirement_ids.map(id => getWorker({}, {id}))
  }
}
