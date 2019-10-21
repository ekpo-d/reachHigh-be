// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, lowercase: true, required: true },
    password: { type: String, required: true },
    selectedGoals: [mongooseClient.Schema.Types.ObjectId],
    completedTasks: [mongooseClient.Schema.Types.ObjectId],
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
