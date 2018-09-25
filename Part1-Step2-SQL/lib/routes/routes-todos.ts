import express = require('express');
var router = express.Router()
import { Request, Response } from "express";
import client from '../config/db-config'

export class todosRouters {

    public routes(server) {

        // get todos from post-grey-sql
        server.route('/api/todos').get((req: Request, res: any, next) => {
            client.query('SELECT * FROM todos', (err, todos: any) => {
                if (err) {
                    return next(err)
                }
                if (!todos || !todos.rows.length) {
                    console.log(todos)
                    res.t.message = "No Todos available"
                    return res.status(200).send(res.t)
                }
                res.t.success = true
                res.t.message = "Todos Found"
                res.t.data = todos.rows
                return res.status(200).send(res.t)
            })
        })

        // insert todos in post-grey-sql
        server.route('/api/todos').post(function (req: Request, res: any, next) {
            if (!req.body.title || !req.body.place || !req.body.description) {
                res.t.message = "Invalid Request"
                return res.status(203).send(res.t)
            }
            const queryInsert = {
                text: 'INSERT INTO todos( title, place, description, status) VALUES($1, $2, $3, $4) RETURNING *',
                values: [req.body.title, req.body.place, req.body.description, req.body.status,],
            }
            client.query(queryInsert, (err, todos: any) => {
                if (err) {
                    return next(err)
                }
 
                res.t.success = true
                res.t.message = "Todo Added"
                res.status(200).send(res.t)
            })
        });

        // get one TODO from Post-gre-sql
        server.route('/api/todos/:id').get(function (req: Request, res: any, next) {

            let { id } = req.params
            const queryOneTodo = {
                text: 'SELECT * FROM todos WHERE _id = ($1) ',
                values: [id]
            }
            client.query(queryOneTodo, (err, todos: any) => {
                if (err) {
                    return next(err)
                }
                if (!todos || !todos.rows.length) {
                    res.t.message = "No Todos available"
                    return res.status(404).send(res.t)
                }
                res.t.success = true
                res.t.message = "Todos Found"
                res.t.data = todos.rows[0]
                return res.status(200).send(res.t)
            })
        })

        // Update Todos in post-gre-sql
        server.route('/api/todos/:id').put(function (req: Request, res: any, next) {

            if (!req.body.title || !req.body.place || !req.body.description) {
                res.t.message = "Invalid Request"
                return res.status(203).send(res.t)
            }
            let { id }: any = req.params;
            let { title, place, description, status }: any = req.body;
            const queryUpdate = {
                text: 'UPDATE todos SET title= ($1), place=($2), description =($3), status=($4)  WHERE _id = ($5) ',
                values: [title, place, description, status, id],
            }
            client.query(queryUpdate, (err: any, todo: any) => {
                if (err) {
                    return next(err)
                }

                res.t.success = true
                res.t.message = "Todo edited"
                return res.status(200).send(res.t)
            })
        })

        //Delete Todo from post-gre-sql
        server.route('/api/todos/:id').delete(function (req: Request, res: any, next) {
            let { id }: any = req.params;
            const queryDelete = {
                text: 'DELETE FROM todos WHERE _id = ($1) RETURNING *',
                values: [id]
            }
            client.query(queryDelete, (err: any, todo: any) => {

                if (err) {
                    return next(err)
                }

                res.t.success = true
                res.t.message = "Todo Deleted"
                return res.status(200).send(res.t)

            })
        })
    }
}

