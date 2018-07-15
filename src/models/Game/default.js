import uuid from 'uuid/v4'
import Faker from 'faker'


const genName = () => {
  return Faker.random.words(2).slice(0,2).split(' ')
    .map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
}

const defaultGame = () => {
  return {
    id: uuid(),
    name: genName,

  }
}

export default defaultGame