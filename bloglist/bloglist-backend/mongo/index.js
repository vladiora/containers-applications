const mongoose = require('mongoose')
const Blog = require('./models/blog')
const User = require('./models/user')
const config = require('../utils/config')
const logger = require('../utils/logger')

mongoose.set('strictQuery', false)

if (config.MONGODB_URI  && !mongoose.connection.readyState)
    mongoose.connect(config.MONGODB_URI)
        .then(() => {
            logger.info('connected to MongoDB')
        })
        .catch((error) => {
            logger.error('error connecting to MongoDB:', error.message)
        })


module.exports = {
  Blog,
  User
}