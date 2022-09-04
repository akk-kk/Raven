require('dotenv').config()

const PORT = process.env.PORT || 5000
const DB_URI = process.env.DB_URI

module.exports = {
    PORT: PORT,
    DB_URI: DB_URI,
}
console.log(module.exports)
