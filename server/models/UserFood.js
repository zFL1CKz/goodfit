const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  owner: { type: Types.ObjectId, ref: 'User' },
  food: { type: Types.ObjectId, ref: 'Food' },
})

module.exports = model('UserFood', schema)
