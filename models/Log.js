const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  level: String,
  message: String,
  data : Object,
  timestamp: { type: Date, default: Date.now }
});

const LogModel = mongoose.model('Log', logSchema);

module.exports = LogModel;
