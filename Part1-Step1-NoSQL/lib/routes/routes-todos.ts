import express = require('express');
var router = express.Router()

import Todos from '../models/model-todos'

router.get('/', (req, res : any) => {

    let $query : any = {}

    Todos.find( $query ).sort({ date: -1 }).exec( (err, todos) => {

        if (!todos) {
            res.t.message = "No Todos available"
            return res.send(res.t)
        }

        res.t.success = true
        res.t.message = "Data found"
        res.t.data = todos

        return res.status(200).send(res.t)

    })

})

// Sigle Todo Get
router.get('/:id', function (req, res : any) {

    let { id } : any = req.params

    Todos.findById(id).exec(function (err, todo:any) {

        if (!todo) {
            res.t.message = "Todo not available"
            return res.send(res.t)
        }

        res.t.success = true
        res.t.message = "Todo Found"
        res.t.data = todo

        return res.send(res.t)

    })

})



export default router