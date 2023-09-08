const router = require('express').Router()
const Controller = require('../controller/userController')

router.post('/add', Controller.add)

router.get('/all', Controller.getAll)

router.get('/details/:id', Controller.getOne)

router.put('/update/:id', Controller.update)

router.delete('/delete/:id', Controller.deleteOne)

router.post('/forget-password', Controller.forgetpassword)

module.exports = router