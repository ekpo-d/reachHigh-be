const users = require('./users/users.service.js');
const goals = require('./goals/goals.service.js');

/**
 * App Service Configuration
 * This register services by attaching them to the app object.
 */
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(goals);
};
