const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const Food = require('../models/Food')
const UserFood = require('../models/UserFood')
require('../models/FoodType')

const router = Router()

router.get('/getfood', async (req, res) => {
  try {
    const food = await Food.find().populate('type')
    res.json(food)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.post('/setfood', auth, async (req, res) => {
  try {
    const { foodId, gram, partOfDay } = req.body
    const food = await new UserFood({
      owner: req.user.userId,
      food: foodId,
      date: new Date().toLocaleDateString(),
      gram: gram,
      partOfDay: partOfDay,
    })
    await food.save()
    res.json(food)
  } catch (error) {
    res.status(500).json({
      message: 'Что-то пошло не так, попробуйте снова',
    })
  }
})

router.get('/getuserfood', auth, async (req, res) => {
  try {
    const food = await UserFood.find({ owner: req.user.userId, date: new Date().toLocaleDateString() }).populate('food')
    res.json(food)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router
