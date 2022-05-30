const { Router } = require('express')
const FoodType = require('../models/FoodType')

const router = Router()

router.get('/getfood', async (req, res) => {
  try {
    const genders = await FoodType.find()
    res.json(genders)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router
