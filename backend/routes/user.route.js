const express = require('express')
const { nextTick } = require('vue')
const userRoute = express.Router()

let UserModel = require('../models/User')

// View all Users
userRoute.route('/').get((req, res) => {
  UserModel.find((error, data) => {
    if(error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Create User
userRoute.route('/create').post((req, res, next) => {
  UserModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = userRoute