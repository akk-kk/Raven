require('dotenv').config()

const PORT = process.env.PORT || 5000
const DB_URI = process.env.DB_URI
const SECRET_KEY = process.env.SECRET_KEY

module.exports = {
    PORT: PORT,
    DB_URI: DB_URI,
    SECRET_KEY: SECRET_KEY,
}
console.log(module.exports)
