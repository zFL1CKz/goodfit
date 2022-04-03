const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: { type: String },
  desc: { type: String },
})

module.exports = model('Activity', schema)
