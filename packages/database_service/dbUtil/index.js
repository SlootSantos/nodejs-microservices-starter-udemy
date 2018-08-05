const mongoose = require('mongoose');
const MailSchema = require('./Models/Mail');

module.exports = config => {
  mongoose.Promise = global.Promise;
  mongoose.connect(config.mongoURI);

  mongoose.model('Mail', MailSchema);
};
