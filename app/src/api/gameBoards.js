import axios from 'axios';

const route = 'http://localhost:3030/game-boards';

export const find = async (key) => {
  return axios.get(`${route}?key=${key}`);
};

export const create = async (key) => {
  return axios.post(route, {
    key,
  });
};
