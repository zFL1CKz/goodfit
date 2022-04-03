const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  activity: { type: Types.ObjectId, ref: 'Activity' },
  info: {
    caloriesCalc: { type: Boolean, default: true },
    birth: { type: Date },
    height: { type: Number },
    weight: { type: Number },
    gender: { type: Types.ObjectId, ref: 'Gender' },
  },
})

module.exports = model('User', schema)
