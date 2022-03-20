const Sequelize = require('sequelize')

const sequelize = new Sequelize('loginsystemlib', 'loginsystem', '988766544', {
	dialect: 'mysql',
	host: 'db4free.net'
})

module.exports = sequelize

