const { Router } = require('express')
const auth = require('../middleware/auth.middleware')
const Goal = require('../models/Goal')

const router = Router()

router.get('/get', auth, async (req, res) => {
  try {
    const goals = await Goal.find({ owner: req.user.userId })
    res.json(goals)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.post('/add', auth, async (req, res) => {
  try {
    const { goalsInput } = req.body
    const goal = await new Goal({
      owner: req.user.userId,
      text: goalsInput,
    })
    await goal.save()
    res.json(goal)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.delete('/delete/:id', async (req, res) => {
  try {
    const goal = await Goal.findOneAndDelete({ _id: req.params.id })
    res.json(goal)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

router.put('/completed/:id', async (req, res) => {
  try {
    const goal = await Goal.findOne({ _id: req.params.id })
    goal.completed = !goal.completed

    await goal.save()

    res.json(goal)
  } catch (error) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

module.exports = router
