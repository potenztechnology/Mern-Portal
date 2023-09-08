const jwt = require('jsonwebtoken')
const SecretKey = "SecretKey"

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.status(200).json({ Error: "Please Provide the Token." })
        } else {
            jwt.verify(token, SecretKey, (error, data) => {
                if (error) {
                    return res.status(404).json({
                        Error: `Unauthorized!, ${err}`
                    })
                } else {
                    req.userData = data
                }
            })
        }
        next()
    } catch (error) {
        console.log(error);
    }
}

module.exports = { verifyToken }