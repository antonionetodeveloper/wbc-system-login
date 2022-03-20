const database = require('../db')
const USERS = require('../create')

async function getUserByUserName(userName){
	await database.sync()

	const selectedUser = await USERS.findOne({
		where: {
			login: userName
		}
	})
	
	return selectedUser
}

module.exports = getUserByUserName
