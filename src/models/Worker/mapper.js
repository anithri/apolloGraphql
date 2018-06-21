import WorkerData from './data.json'
import Worker from './base'

const workers = WorkerData.items.map(w => new Worker(w))

const workersById = workers.reduce((hsh, worker) => {
  hsh[worker.id] = worker
  return hsh
}, {})


export const getWorkers = (root, args) => workers
export const getWorker = (root, args) => workersById[args.id]

