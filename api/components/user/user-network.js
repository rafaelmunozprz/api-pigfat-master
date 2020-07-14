const express = require('express')

//Responses
const response = require('../../../network/response')
//Controller
const Controller = require('./user-controller')


const user = express.Router()

user.get('/', (req, res) => {
    const list = Controller.list()
    response.success(req, res, list, 200)
})

module.exports = {
    user
}