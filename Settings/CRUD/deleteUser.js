const database = require('../db')
const USERS = require('../create')


async function deleteUser(userID){
	await database.sync()

	const selectedUser = USERS.findByPk(userID)
	selectedUser.destroy()
}

module.exports = deleteUser
