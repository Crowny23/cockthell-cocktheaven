const express = require('express')
const { nextTick } = require('vue')
const userRoute = express.Router()

let UserModel = require('../models/User')

// View all User
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

// Edit User
userRoute.route('/edit/:id').get((req, res) => {
  UserModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update user
userRoute.route('/update/:id').post((req, res, next) => {
  UserModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(data)
    } else {
      res.json(data)
    }
  })
})

// Delete User
userRoute.route('/delete/:id').delete((req, res, next) => {
  UserModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = userRoute