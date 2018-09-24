import express = require('express');
import bodyParser = require('body-parser')
import { Request, Response } from "express";
//Importing Routes
import {todosRouter} from './routes/routes-todos'


//Importing MiddleWares
import responseTemplate from './middlewares/response-template'

 //DB Connection
require('./config/db-config')

//TypeScript class
class App {
    public server: express.Application;

    public todoRoute: todosRouter = new todosRouter();
    constructor() {
        this.server = express();
       this.configuration();
    }

    private configuration(): void {
         //Use Custom Middleware to get response template in all api routes
        this.server.use(responseTemplate);
       
        this.server.use(bodyParser.urlencoded({ extended: true }));
        this.server.use(bodyParser.json());
       
        //Error Control
        this.server.use(function (err, req, res, next) {
            console.error(err);
            res.status(500).send('Something broke!');
        })

        this.server.use((req: Request, res: Response, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Credentials", "true");
            res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
            res.header("Access-Control-Allow-Headers", "Content-Type");
            next();
        });
        this.todoRoute.routes(this.server);
        this.server.get('/', (req, res: any) => {
                res.status(200).send("Root / Working...");
            })
    }
}


export default new App().server

// const server = express()

// //DB Connection
// require('./config/db-config')

// //Body Parser
// server.use(bodyParser.urlencoded({ extended: true }))
// server.use(bodyParser.json())


// //Use Custom Middleware to get response template in all api routes
// server.use( responseTemplate )

// //Setting up routes
// server.use('/api/todos', todosRouter)

// server.get('/', (req, res: any) => {
//     res.status(200).send("Root / Working...")
// })

// //Error Control
// server.use(function (err, req, res, next) {

//     console.error(err)
//     res.status(500).send('Something broke!')

// })

// export default server