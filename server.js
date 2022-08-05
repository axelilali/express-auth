const express = require('express')
const cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:8081',
}

const app = express()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// sequelize configuration
const db = require('./models')

db.sequelize.sync()

app.get('/', (req, res) => {
  res.json({ message: 'App works !' })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
