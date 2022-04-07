const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const User = require('../models/User')

const router = Router()

router.get('/getuserinfo', auth, async (req, res) => {
  try {
    const info = await User.findOne({ _id: req.user.userId })
      .populate('activity')
      .populate({ path: 'info', populate: { path: 'gender' } })
    res.json(info)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.post('/setuserinfo', auth, async (req, res) => {
  try {
    const { activity, caloriesCalc, birth, height, weight, gender } = req.body
    const user = await User.findOne({ _id: req.user.userId })

    user.activity = activity
    user.info.caloriesCalc = caloriesCalc
    user.info.birth = birth
    user.info.height = height
    user.info.weight = weight
    user.info.gender = gender

    await user.save()

    res.json(user)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router
