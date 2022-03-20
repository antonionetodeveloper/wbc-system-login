const Sequelize = require('sequelize')
const database =  require('./db')

const users = database.define('users', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},

	login: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},

	nome: {
		type: Sequelize.STRING,
		allowNull: false,
	},

	password: {
		type: Sequelize.STRING,
		allowNull: false
	}
})

module.exports = users
