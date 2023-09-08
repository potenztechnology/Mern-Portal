const { User } = require('../model/user')
const bcrypt = require('bcryptjs')

const add = async (req, res) => {
    try {
        let data = {
            name: req.body.name,
            email: req.body.email,
            role: req.body.role,
            password: bcrypt.hashSync(req.body.password, 8)
        }
        const add = await User.create(data)
        return res.status(200).send(add)
    } catch (error) {
        console.log(error);
    }
}

const getAll = async (req, res) => {
    try {
        const getAll = await User.find({})
        return res.status(200).send(getAll)
    } catch (error) {
        console.log(error);
    }
}

const getOne = async (req, res) => {
    try {
        let id = req.params.id
        const getOne = await User.findById({ _id: id })
        return res.status(200).send(getOne)
    } catch (error) {
        console.log(error);
    }
}

const update = async (req, res) => {
    try {
        let id = req.params.id
        let data = {
            name: req.body.name,
            email: req.body.email,
            role: req.body.role,
            password: bcrypt.hashSync(req.body.password, 8)
        }
        const update = await User.updateOne({ _id: id }, { $set: data })
        return res.status(200).json({ Message: "Updated" })
    } catch (error) {
        console.log(error);
    }
}

const deleteOne = async (req, res) => {
    try {
        let id = req.params.id
        const deleteOne = await User.deleteOne({ _id: id })
        return res.status(200).json({ Message: "Deleted" })
    } catch (error) {
        console.log(error);
    }
}

const forgetpassword = async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const newpassword = req.body.newpassword

        const verifyUser = await User.findOne({ email: email })
        console.log(verifyUser);

        if (!verifyUser) {
            return res.status(404).json({ Message: "Please valid email address !" })
        } else {
            const verifyPassword = bcrypt.compareSync(password, verifyUser.password)
            if (!verifyPassword) {
                return res.status(404).json({ Message: "Please the right password !" })
            } else {
                let data = {
                    password: bcrypt.hashSync(newpassword, 9)
                }
                const update = await User.updateOne({ _id: verifyUser._id }, { $set: data })
                return res.status(200).json({ Message: "Updated !" })
            }
        }
    } catch (error) {
        console.log(error);
    }
}


module.exports = { add, getAll, getOne, update, deleteOne, forgetpassword }
