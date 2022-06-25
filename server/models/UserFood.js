const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  owner: { type: Types.ObjectId, ref: 'User' },
  food: { type: Types.ObjectId, ref: 'Food' },
  date: { type: String },
  gram: { type: Number },
  partOfDay: { type: String },
})

module.exports = model('UserFood', schema)
