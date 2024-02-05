const express = require('express')
const router = express.Router()

const configs = require('../util/config')

const redis = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  })
})

/* GET to-do statistics from redis */
router.get('/statistics', async (req, res) => {
  res.json({ added_todos: Number(await redis.getAsync('todoCounter')) || 0 })
})

module.exports = router
