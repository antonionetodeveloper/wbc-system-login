const database = require('../db')
const USERS = require('../create')


async function updatePassword(userID, newpassword){
	await database.sync()

	const selectedUser = await USERS.findByPk(userID)
	selectedUser.password = newpassword

	await selectedUser.save()
}

module.exports = updatePassword
