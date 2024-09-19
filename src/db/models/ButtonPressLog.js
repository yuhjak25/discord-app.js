const mongoose = require('mongoose')

const buttonPressLogSchema = new mongoose.Schema({
  customId: String,
  pressCount: {
    type: Number,
    default: 0,
  },
})

module.exports = mongoose.model('ButtonPressLog', buttonPressLogSchema)
