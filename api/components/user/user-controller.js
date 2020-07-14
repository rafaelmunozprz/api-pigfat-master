const store = require('../../../store/store')

const TABLE = 'user'

const list = () => {
    return store.list(TABLE)
}

module.exports = {
    list
}