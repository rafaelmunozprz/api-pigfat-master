const db = {
    'user': [
        {
            id: 1,
            name: 'Rafael'
        },
        {
            id: 2,
            name: 'Emmanuel'
        },
        {
            id: 3,
            name: 'Jorge'
        }
    ]
}

const list = (table) => {
    return db[table]
}

const get = (table, id) => {
    let resp = list(table)
    return resp.filter((ite,) => {
        item.id === id
    })[0] || null
}

const add = (table, data) => {
    db[collection].push(data)
}

const remove = (table, id) => {
    return true
}

module.exports = {
    list,
    get,
    add,
    remove
}