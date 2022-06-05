const { Router } = require('express')
const Food = require('../models/Food')

const router = Router()

router.get('/getfood', async (req, res) => {
  try {
    const food = await Food.find()
    res.json(food)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router
