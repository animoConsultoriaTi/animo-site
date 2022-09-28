import axios from 'axios';

export const strapi = axios.create({
  baseURL: 'https://animo-cms.herokuapp.com/api/',
});
