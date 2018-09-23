import * as express from "express";
import * as bodyParser from 'body-parser';
import { Request, Response } from "express";





//Importing Routes class
import { todosRouters } from './routes/routes-todos';

//Importing MiddleWares
import responseTemplate from './middlewares/response-template';

class App {
    public server: express.Application;

    public todoRoute: todosRouters = new todosRouters();
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