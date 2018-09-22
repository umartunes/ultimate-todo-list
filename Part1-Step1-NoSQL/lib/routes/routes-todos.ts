import express = require('express');
var router = express.Router()

import Todos from '../models/model-todos'

router.get('/', (req, res : any) => {

    let $query : any = {}

    Todos.find( $query ).sort({ date: -1 }).exec( (err, todos) => {

        if (!todos) {
            res.t.message = "No Todos available"
            return res.status(200).send(res.t)
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
            return res.status(200).send(res.t)
        }

        res.t.success = true
        res.t.message = "Todo Found"
        res.t.data = todo

        return res.status(200).send(res.t)

    })

})

// insert Todo 
router.post('/' , function (req : any, res : any) {

    // console.log(req.body)
    // console.log(req.body.moreInfo)

    if (!req.body.title || !req.body.place || !req.body.description) {
        res.t.message = "Invalid Request"
        return res.status(203).send(res.t)
    }

    let todo = new Todos({
        title: req.body.title.trim(),
        place: req.body.place.trim(),
        description: req.body.description.trim(),
    });

    todo.save(function (err, todo) {
        
        if (!todo) {
            res.t.message = "Todo not available"
            return res.status(200).send(res.t)
        }

        res.t.success = true
        res.t.message = "Todo Added"
        res.t.data = todo

        return res.status(200).send(res.t)
        
    })

})

// Update Todos 

router.put('/:id', function (req : any, res : any) {

    if (!req.body.title || !req.body.place || !req.body.description) {
        res.t.message = "Invalid Request"
        return res.status(203).send(res.t)
    }

    let { id } : any =  req.params;
    let { title  , place , description , status }:any = req.body;

    Todos.findByIdAndUpdate(id ,{title,place,description,status}).exec(function (err :any, todo:any) {

        if (!todo) {
            res.t.message = "Todo not available"
            return res.status(200).send(res.t)
        }

        res.t.success = true
        res.t.message = "Todo Found"
        res.t.data = todo

        return res.status(200).send(res.t)

    })

})

//Delete Todo
router.delete('/:id', function (req:any, res : any) {

    let { id } : any = req.params;

    Todos.findByIdAndRemove(id).exec(function (err : any, todo : any) {

        if (!todo) {
            res.t.message = "Todo not available"
            return res.status(200).send(res.t)
        }

        res.t.success = true
        res.t.message = "Todo Deleted"
        res.t.data = todo

        return res.status(200).send(res.t)

    })

})




export default router