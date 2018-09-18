import * as express from 'express'
var router = express.Router()

import Todos from '../models/model-todos'

import authRequired from '../middlewares/auth-required'

router.get('/', authRequired, (req, res : any) => {

    let $query : any = {}

    Todos.find( $query ).sort({ date: -1 }).exec( (err, todos) => {

        if (!todos || !todos.length) {
            res.t.message = "No Todos available"
            return res.send(res.t)
        }

        res.t.success = true
        res.t.message = "Todos Found"
        res.t.data = todos

        return res.send(res.t)

    })

})

router.post('/',authRequired, function (req : any, res : any) {

    // console.log(req.body)
    // console.log(req.body.moreInfo)

    if (!req.body.title || !req.body.place || !req.body.description) {
        res.t.message = "Invalid Request"
        return res.send(res.t)
    }

    let todo = new Todos({
        // authorId: req.user._id,
        title: req.body.title.trim(),
        place: req.body.place.trim(),
        description: req.body.description.trim(),
    });

    todo.save(function (err, todo) {
        res.send(err ? err : todo)
    })

})

router.get('/:id', authRequired, function (req, res : any) {

    let { id } = req.params

    Todos.findById(id).exec(function (err, todo) {

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

// Update Todos 

router.put('/:id',authRequired, function (req : any, res : any) {

    if (!req.body.title || !req.body.place || !req.body.description) {
        res.t.message = "Invalid Request"
        return res.send(res.t)
    }

    let { id } : any =  req.params;
    let { title  , place , description }:any = req.body;

    Todos.findByIdAndUpdate(id ,{title,place,description}).exec(function (err :any, todo:any) {

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

//Delete Todo
router.delete('/:id',authRequired, function (req:any, res : any) {

    let { id } : any = req.params;

    Todos.findByIdAndRemove(id).exec(function (err : any, todo : any) {

        if (!todo) {
            res.t.message = "Todo not available"
            return res.send(res.t)
        }

        res.t.success = true
        res.t.message = "Todo Deleted"
        res.t.data = todo

        return res.send(res.t)

    })

})
export default router