const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  body: String,
  user: { type: mongoose.Schema.ObjectId, ref: 'User'}
});

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true},
  image: [{type: String}],
  description: { type: String},
  ingredient1: { type: String},
  ingredient2: { type: String},
  ingredient3: { type: String},
  ingredient4: { type: String},
  ingredient5: { type: String},
  ingredient6: { type: String},
  step1: { type: String},
  step2: { type: String},
  step3: { type: String},
  step4: { type: String},
  step5: { type: String},
  step6: { type: String},
  comments: [commentSchema],
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Recipe', recipeSchema);
