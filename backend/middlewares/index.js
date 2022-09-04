const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require("../config")

function generateToken(id) {
    return jwt.sign({ 'sub': id }, SECRET_KEY, { expiresIn: '180000s' })
}

function authenticate(req, res, next) {
    const token = req.cookies.access_token
    if (!token)
        return res.status(401).send({
            message: "Unauthorized"
        })
    try {
        const data = jwt.verify(token, SECRET_KEY)
        res.locals.sub = data.sub
        return next()
    } catch {
        return res.status(403).send({
            message: "Unauthorized"
        })
    }
}


module.exports = { generateToken, authenticate }
