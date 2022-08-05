const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
// sequelize configuration
const db = require('./models')

const corsOptions = {
  origin: 'http://localhost:8081',
}

const app = express()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

db.sequelize.sync()

// // routes
// app.get('/', (req, res) => {
//   res.json({ message: 'App works !' })
// })

// routes
require('./routes/auth.routes')(app)
require('./routes/user.routes')(app)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
