const database = require('../db')
const USER = require('../create')


async function createNewUser(name, login, password){
	await database.sync()

	const newUser = await USER.create({
		nome: `${name}`,
		login: `${login}`,
		password: `${password}`
	})
}

module.exports = createNewUser
