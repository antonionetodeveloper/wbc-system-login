const express = require('express')
const cors = require("cors")
const app = express()
const bodyParser = require('body-parser')

const getUserByUserName = require('./Settings/CRUD/getUserByUsername')
const getUserByID = require('./Settings/CRUD/readUser')
const createUser  = require('./Settings/CRUD/createUser')

app.use(cors());
app.use((req, res, next) => {next()})
app.use(bodyParser.json())


app.get('/', async (req, res) => {
	res.send("Rodando servidor")
})

app.post("/register", async (req, res) => {
	const {name}     = await req.body
	const {login}    = await req.body
	const {password} = await req.body

	await createUser(name, login, password)
	.then(() => {
		res.send(201)
	 }, () => {
		 res.send(200)
	 });
})

app.post("/login", async (req, res) => {
	const {recivedLogin, recivedPassword} = req.body

	const data = await getUserByUserName(recivedLogin)
	
	if(!data){
		res.send(200)
		return
	}
	if(recivedLogin != data.dataValues.login || recivedPassword != data.dataValues.password){
		res.send(200)
	}else{
		
		res.send(201)
	}
})

app.get("/userInfo", async (req, res) => {

	const UserInfo = getUserByID()

	res.send(UserInfo)
})


app.use(express.json())


const localPort = 3001;
const hostPort  = process.env.PORT;
const port = hostPort || localPort;
app.listen(port, () => {console.log(`Rodando na porta ${port}`)})
