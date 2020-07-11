const express = require('express')

//Global settings
const globals = require('../config/globals')

//USER-NETWORK
const {user} = require('./components/user/user-network')

//Router
const app = express()
app.use('/api/user', user)

//API launch
app.listen(globals.API_PORT, () => {
    console.log(`API launched on port: ${globals.API_PORT}`)
})