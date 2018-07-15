import AWS from 'aws-sdk'
import uuid from 'uuid/v4'
import Game from '../base'
import Faker from 'faker'
import {randomUsers} from '../User'

AWS.config.update({ region: 'us-west-2' });
const docClient = new AWS.DynamoDB.DocumentClient();
export const createGame = (root, args) => {

  const gameParams = {
    TableName: 'GameTable',
    Item: {
      id: uuid(),
      name: Faker.random.words(2).slice(0,2).split(' ')
        .map(w => w[0].toUpperCase() + w.slice(1)).join(' '),
      players: randomUsers(4).map(user => user.id),
      boardId: uuid(),
      deckId: uuid()
    }
  }
}

allUsers.forEach(function(user) {
  const Userparams = {
    TableName: 'Users',
    Item: {
      name: user.name,
      handle: user.handle,
      location: user.location,
      description: user.description,
      followers_count: user.followers_count,
      friends_count: user.friends_count,
      favourites_count: user.favourites_count,
      following: user.following,
    },
  };

  docClient.put(Userparams, function(err, data) {
    if (err) {
      console.error(
        'Unable to add user',
        user.name,
        '. Error JSON:',
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log('PutItem succeeded:', user.name);
    }
  });
});
