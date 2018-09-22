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


export default router