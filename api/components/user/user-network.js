const express = require('express')

//Responses
const response = require('../../../network/response')

const user = express.Router()

user.get('/', (req, res) => {
    response.success(req, res, 'Server running...', 200)
})

module.exports = {
    user
}