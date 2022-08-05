const express = require('express');
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:8081',
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sequelize configuration
const db = require('./models');

const Role = db.role;
db.sequelize.sync();

function initial() {
  Role.create({
    id: 1,
    name: 'user',
  });

  Role.create({
    id: 2,
    name: 'moderator',
  });

  Role.create({
    id: 3,
    name: 'admin',
  });
}

app.get('/', (req, res) => {
  res.json({ message: 'App works !' });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
