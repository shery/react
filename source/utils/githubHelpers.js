import axios from 'axios';

const id = 'Client_Id';
const sec = 'Secret_Id';
const param = ['?client_id=', id, '&client_secret=', sec].join('');

function getUserInfo(username) {
  return axios.get(['https://api.github.com/users/', username, param].join(''))
}

const helpers = {
  getPlayersInfo(players) {
    return axios.all(players.map(username => getUserInfo(username)))
    .then(info => info.map(user => user.data))
    .catch(err => console.warn('Error in getPlayersInfo', err));
  }
};

export default helpers;
