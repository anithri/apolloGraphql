import WorkerData from './data.json'
import Worker from './base'
import jsonMapper from '../../utils/jsonMapper'

export const mapper = jsonMapper(WorkerData, Worker)
mapper.workers = mapper.getAll()
mapper.workerIds = mapper.workers.map(w => w.id)
mapper.workersById = mapper.workers.reduce((byId, worker) => {
  byId[worker.id] = worker
  return byId
}, {})

export const {getItem: getWorker, getAll: getWorkers} = mapper
