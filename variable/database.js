const knex = require('knex')

const db = knex({
    client: "mysql",
    connection: {
        host: 'localhost',
        password: 'limdongju',
        port: 3306,
        user: 'root',
        database: 'nfc'
    }
})
module.exports ={db}