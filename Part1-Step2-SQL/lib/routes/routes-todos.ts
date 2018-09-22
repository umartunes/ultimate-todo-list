import express = require('express');
var router = express.Router()
import client from '../config/db-config'

router.get('/', (req, res : any) => {

    client.query('SELECT * FROM todos', (err, todos: any) => {
        if (!todos || !todos.rows.length) {
            res.t.message = "No Todos available"
            return res.status(200).send(res.t)
        }
        res.t.success = true
        res.t.message = "Todos Found"
        res.t.data = todos.rows
        // console.log(err, todos)
        
        return res.status(200).send(res.t)
        
    })

})

// insert todos
router.post('/',   function (req: any, res: any) {

    if (!req.body.title || !req.body.place || !req.body.description) {
        res.t.message = "Invalid Request"
        return res.status(203).send(res.t)
    }
    const queryInsert = {
        text: 'INSERT INTO todos( title, place, description, status) VALUES($1, $2, $3, $4) RETURNING *',
        values: [ req.body.title, req.body.place, req.body.description, req.body.status, ],
    }
    client.query(queryInsert, (err, todos: any) => {

        if (!todos || !todos.rows.length) {
            res.t.message = "No Todos available"
            return res.status(200).send(res.t)
        }
        res.t.success = true
        res.t.message = "Todos Found"
        res.t.data = todos.rows

        res.status(200).send(res.t)
    })

});

// get one TODO
router.get('/:id',  function (req, res: any) {

    let { id } = req.params
    const queryOneTodo = {
        text: 'SELECT * FROM todos WHERE _id = ($1) ',
        values: [id]

    }

    client.query(queryOneTodo, (err, todos: any) => {
        if (!todos || !todos.rows.length) {
            res.t.message = "No Todos available"
            return res.send(res.t)
        }
        res.t.success = true
        res.t.message = "Todos Found"
        res.t.data = todos.rows
        return res.send(res.t)
    })
})




export default router