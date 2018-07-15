export { default as Worker } from './base'
export { default as workerTypes } from './types'
export { default as workerResolvers } from './resolvers'

const allWorkers = workerResolvers.Query.workers()

export const mkPool = val => {
  return allWorkers.ids.reduce((pool, id) => {
    pool.push(...Array(val).fill(id))
    return pool
  }, [])
}
