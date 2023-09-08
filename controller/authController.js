const { User } = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SecretKey = "SecretKey"

const Login = async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password

        const user = await User.findOne({ email: email })

        if (!user) {
            return res.status(401).json({ Error: "User does not exists!!" })
        }

        const verifyPassword = bcrypt.compareSync(password, user.password)

        if (!verifyPassword) {
            return res.status(401).json({ Error: "Invalid Password!" })
        } else {
            const token = jwt.sign({ user: user }, SecretKey, { expiresIn: "2h" })
            return res.status(200).json({ Token: token })
        }
    } catch (error) {
        console.log(error);
    }
}

const Details = async (req, res) => {
    try {
        const User = req.userData.user
        return res.status(200).json({ User: User })
    } catch (error) {
        console.log(error);
    }
}


module.exports = { Login, Details }