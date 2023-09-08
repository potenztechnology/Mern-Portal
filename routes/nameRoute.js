const router = require('express').Router()
const Controller = require('../controller/nameController')

router.post('/add', Controller.upload.single('File'), Controller.add)

router.get('/all', Controller.getAll)

router.get('/details/:id', Controller.getOne)

router.put('/update/:id', Controller.update)

router.delete('/delete/:id', Controller.deleteOne)

module.exports = router