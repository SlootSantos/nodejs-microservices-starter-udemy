const axios = require('axios');
const { serviceDatabase: { port } } = require('../config');

const { pushToMessageQ } = require('../Q/connect');

const hostname = 'http://localhost';
const databaseURL = `${hostname}:${port}`;

const get = async path =>
  (await axios.get(`${databaseURL}/${path}`)).data.payload;

const post = async (path, body) =>
  (await axios.post(`${databaseURL}/${path}`, { ...body })).data.payload;

module.exports = {
  Query: {
    mails: () => get('mails'),
    mail: (_, { id }) => get(`mails/${id}`)
  },
  Mutation: {
    mail: (_, args) => {
      let result;
      let error;

      try {
        result = post('mails', args);
      } catch (e) {
        error = e;
      }

      pushToMessageQ(JSON.stringify(args));

      return result || error;
    }
  }
};
