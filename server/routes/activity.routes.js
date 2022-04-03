const { Router } = require('express')
const Activity = require('../models/Activity')

const router = Router()

router.get('/getactivity', async (req, res) => {
  try {
    const activities = await Activity.find()
    res.json(activities)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router
