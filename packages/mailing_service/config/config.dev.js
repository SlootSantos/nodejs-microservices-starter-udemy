const { Q_URI, MJ_API_PUBLIC, MJ_API_SECRET } = process.env;

module.exports = {
  q: {
    uri: Q_URI || 'blabla'
  },
  mailjet: {
    apiPublic: MJ_API_PUBLIC,
    apiSecret: MJ_API_SECRET
  }
};
