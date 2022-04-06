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

module.exports = router
