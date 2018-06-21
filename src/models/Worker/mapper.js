import WorkerData from './data.json'
import Worker from './base'
import jsonMapper from 'utils/jsonMapper'

export const {getItem: getWorker, getAll: getWorkers} = jsonMapper(WorkerData, Worker)

