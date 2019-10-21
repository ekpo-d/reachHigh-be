const mongoose = require('mongoose');
const logger = require('./logger');

module.exports = function (app) {
  mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${encodeURIComponent(process.env.MONGODB_USER_PWD)}@${process.env.MONGODB_URI}/${process.env.MONGODB_DB}?${process.env.MONGODB_DB_RETRY}`,
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
  ).catch(err => {
    logger.error(err);
    process.exit(1);
  });
  
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
