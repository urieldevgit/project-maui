const NODE_ENV = process.env.NODE_ENV || 'staging';

const config = {
  producction: {
    DB_URL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nuuit.mongodb.net/project?retryWrites=true&w=majority`,
  },
  staging: {
    DB_URL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nuuit.mongodb.net/staging?retryWrites=true&w=majority`,
  },
  test: {
    DB_URL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nuuit.mongodb.net/test?retryWrites=true&w=majority`,
  },
};

module.exports = config[NODE_ENV];
