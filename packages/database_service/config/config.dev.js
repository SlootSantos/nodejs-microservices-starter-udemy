const { PORT } = process.env;

module.exports = {
  port: PORT || 4000,
  mongoURI:
    'mongodb://db_user:password1!@ds247078.mlab.com:47078/microservice_db'
};
