const { Router } = require("express")
const { User } = require("../models")
const {authenticate,generateToken} = require("../middlewares")

const routes = Router()

routes.post("/register", async (req, res) => {
    const { username, password } = req.body
    var user = new User({ username, password })
    user.save((err) => {
        if (err) {
            console.log(err)
            if (err.code === 11000) {
                return res.status(409).send({
                    detail: 'Username already exists',
                    username: username
                })
            }
            else {
                return res.status(500).send({
                    detail: 'Unknown Error Occured'
                })
            }
        }
        return res.status(200).send({
            detail: 'User Created',
            username: username
        })
    })

})

routes.post("/login", async (req, res) => {
    const { username, password } = req.body
    let user = await User.findOne({ 'username': username })

    if (!user) {
        return res.status(401).send({
            message: "Unauthorized"
        })
    }
    await user.comparePassword(password, (err, isMatch = false) => {
        if (err || !isMatch) return res.status(401).send({
            message: "Unauthorized"
        })
        const token = generateToken(user._id, true)
        res.cookie("access_token", token, {
            httpOnly: true,
        })
        return res.status(200).send({
            message: "Successful Login",
            token: token
        })
    })

})

routes.post("/logout",authenticate,(req,res)=>{
    console.log(req.headers)
    res.clearCookie("access_token")
    res.send({
        "detail":"Logged Out Successfuly"
    })
})

module.exports = routes
