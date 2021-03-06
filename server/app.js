const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()

app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api', require('./routes/activity.routes'))
app.use('/api', require('./routes/gender.routes'))
app.use('/api', require('./routes/profile.routes'))
app.use('/api', require('./routes/food.routes'))
app.use('/api/goals', require('./routes/goals.routes'))

const PORT = config.get('PORT') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
    })
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`)
})
