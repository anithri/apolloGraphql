export default class Worker {
  constructor(props) {
    this.id = props.id
    this.name = props.name
  }

  static all(onlyId = false) {
    return onlyId ? mapper.workerIds : mapper.workers
  }

  static find(id) {
    return mapper.workersById(id)
  }

  static pool(count) {
    return mapper.workerIds.reduce((pool, id) => {
      pool.push(...Array(count).fill(id));
      return pool;
    }, []);
  }
}
