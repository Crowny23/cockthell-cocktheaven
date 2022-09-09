const express = require('express')
const { nextTick } = require('vue')
const commentRoute = express.Router()

let CommentModel = require('../models/Comment')

// view all comments
commentRoute.route('/').get((req, res) => {
  CommentModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// create comment
commentRoute.route('/create').post((req, res, next) => {
  CommentModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// find by idDrink
commentRoute.route('/idDrink/:id').get((req, res) => {
  CommentModel.find({idDrink: req.params.id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Delete User
commentRoute.route('/delete/:id').delete((req, res, next) => {
  CommentModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = commentRoute