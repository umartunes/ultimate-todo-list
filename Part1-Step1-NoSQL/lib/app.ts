import express = require('express');
import bodyParser = require('body-parser')

//Importing Routes
import todosRouter from './routes/routes-todos'


//Importing MiddleWares
import responseTemplate from './middlewares/response-template'

const server = express()

//DB Connection
require('./config/db-config')

//Body Parser
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())


//Use Custom Middleware to get response template in all api routes
server.use( responseTemplate )

//Setting up routes
server.use('/api/todos', todosRouter)

server.get('/', (req, res: any) => {
    res.status(200).send("Root / Working...")
})

//Error Control
server.use(function (err, req, res, next) {

    console.error(err)
    res.status(500).send('Something broke!')

})

export default server