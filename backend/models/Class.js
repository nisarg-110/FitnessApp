const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  name: String,
  trainer: String,
  category: String,
  duration: Number,
  capacity: Number,
});

module.exports = mongoose.model('Class', ClassSchema);

