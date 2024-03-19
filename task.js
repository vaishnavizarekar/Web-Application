const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  course: String,
  name: String,
  description: String,
  dueDate: Date,
});

module.exports = mongoose.model('Task', taskSchema);
