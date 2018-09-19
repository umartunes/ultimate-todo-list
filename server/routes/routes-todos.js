"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
var router = express.Router();
const db_config_1 = require("../config/db-config");
const auth_required_1 = require("../middlewares/auth-required");
router.get('/', (req, res) => {
    db_config_1.default.query('SELECT * FROM todos', (err, todos) => {
        if (!todos || !todos.length) {
            res.t.message = "No Todos available";
            return res.send(res.t);
        }
        res.t.success = true;
        res.t.message = "Todos Found";
        res.t.data = todos;
        console.log(err, todos);
        return res.send(res.t);
    });
});
router.post('/', auth_required_1.default, function (req, res) {
    if (!req.body.title || !req.body.place || !req.body.description) {
        res.t.message = "Invalid Request";
        return res.send(res.t);
    }
    const queryInsert = {
        text: 'INSERT INTO todos( title, place, description, status) VALUES($1, $2, $3, $4) RETURNING *',
        values: [req.body.title, req.body.place, req.body.description, req.body.status],
    };
    db_config_1.default.query(queryInsert, (err, todo) => {
        res.send(err ? err : todo);
    });
});
// get one TODO
router.get('/:id', auth_required_1.default, function (req, res) {
    let { id } = req.params;
    const queryOneTodo = {
        text: 'SELECT * FROM todos WHERE _id = ($1) RETURNING *',
        values: [id]
    };
    db_config_1.default.query(queryOneTodo, (err, todos) => {
        if (!todos || !todos.length) {
            res.t.message = "No Todos available";
            return res.send(res.t);
        }
        res.t.success = true;
        res.t.message = "Todos Found";
        res.t.data = todos;
        return res.send(res.t);
    });
});
// Update Todos 
router.put('/:id', auth_required_1.default, function (req, res) {
    if (!req.body.title || !req.body.place || !req.body.description) {
        res.t.message = "Invalid Request";
        return res.send(res.t);
    }
    let { id } = req.params;
    let { title, place, description, status } = req.body;
    const queryUpdate = {
        text: 'UPDATE todos SET title= ($1), place=($2), description =($3), status=($4)  WHERE id = ($5) RETURNING *',
        values: [title, place, description, status, id],
    };
    db_config_1.default.query(queryUpdate, (err, todo) => {
        if (!todo) {
            res.t.message = "Todo not available";
            return res.send(res.t);
        }
        res.t.success = true;
        res.t.message = "Todo Found";
        res.t.data = todo;
        return res.send(res.t);
    });
});
//Delete Todo
router.delete('/:id', function (req, res) {
    let { id } = req.params;
    const queryDelete = {
        text: 'DELETE FROM todos  WHERE id = ($1) RETURNING *',
        values: [id]
    };
    db_config_1.default.query(queryDelete, (err, todo) => {
        if (!todo) {
            res.t.message = "Todo not available";
            return res.send(res.t);
        }
        res.t.success = true;
        res.t.message = "Todo Deleted";
        res.t.data = todo;
        return res.send(res.t);
    });
});
exports.default = router;
//# sourceMappingURL=routes-todos.js.map