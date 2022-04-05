const { Router } = require('express')
const Gender = require('../models/Gender')

const router = Router()

router.get('/getgenders', async (req, res) => {
  try {
    const genders = await Gender.find()
    res.json(genders)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router
