const database = require('../db')
const USERS = require('../create')


async function readUser(userID){
	await database.sync()

	const selectedUser = await USERS.findByPk(userID)
	return selectedUser
}

module.exports = readUser
