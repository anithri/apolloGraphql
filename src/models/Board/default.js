import uuid from 'uuid/v4'
import Worker from '../Worker/base'

const locations = {
  bar: 2,
  dead: 0,
  discard: 3,
  draw: 5,
  reserve: 20
};


const genLocation = (name, count) => {
  return {
    id: name,
    name,
    workers: Worker.pool(count),
  }
}

const genNamedSlots = () => {
  return Object.entries(locations).reduce((slots, [name, count]) => {
    slots[name] = genLocation(name, count)
    return slots
  }, {})
}

const genCardSlots = count => {
  return Array(count).reduce((slots, _e, idx) => {
    slots[idx] = genLocation(`project${idx}`)
    return slots
  }, {})
}

const defaultBoard = () => {
  const params = {
    id: uuid(),
    ...genNamedSlots(),
    ...genCardSlots(),
  }
}

export default defaultBoard

console.log(defaultBoard())