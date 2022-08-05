/* eslint-disable no-shadow */
const db = require('../models')

const { ROLES } = db.ROLES
const User = db.user

const checkDuplicateUserOrEmail = (req, res, next) => {
  // User
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: 'Failed! Username is already in use !',
      })
    }
    // Email
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send({
          message: 'Failed! Email already in use !',
        })
      }
      next()
    })
  })
}

const checkRolesExists = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles; i += 1) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Rol does not exists =${req.body.roles[i]}`,
        })
      }
    }
  }
  next()
}

const verifySignUp = {
  checkDuplicateUserOrEmail,
  checkRolesExists,
}

module.exports = verifySignUp
