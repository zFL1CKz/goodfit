const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  type: { type: Types.ObjectId, ref: 'FoodType' },
  name: { type: String },
  cal: { type: Number },
  bel: { type: Number },
  fat: { type: Number },
  sug: { type: Number },
})

module.exports = model('Food', schema)
