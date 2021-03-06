// goals-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const goals = new Schema({
    title: { type: String, required: true },
    tasks: [{
      title: { type: String, required: true },
      description: { type: String, required: true },
      duration: { type: Number, required: true },
    }],
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('goals');
  } catch (e) {
    return mongooseClient.model('goals', goals);
  }
};
