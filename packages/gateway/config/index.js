const configDev = require('./config.dev');
const configProd = require('./config.prod');

const { NODE_ENV } = process.env;
module.exports = NODE_ENV === 'production' ? configProd : configDev;
