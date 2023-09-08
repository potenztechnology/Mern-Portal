const router = require('express').Router()
const Controller = require('../controller/authController')
const Middleware = require('../middleware/verifyToken')

router.post('/login', Controller.Login)

router.post('/profile', Middleware.verifyToken, Controller.Details)


module.exports = router