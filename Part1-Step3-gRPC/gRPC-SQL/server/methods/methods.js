const client = require('../config/db-config')

function getTodos(call, callback) {

	client.query('SELECT * FROM todos', (err, todos) => {

		if (err) {
			console.log(err, todos);
			let error = new Error("Failed while querying");
			return callback(error, null);
		}
		
		todos.rows.forEach(function (todo) {
			call.write({ todo: todo });
		});

		call.end();

	})

}

function saveTodo(call, callback) {

	let { _id, title, place, description, status } = call.request.todo;

	const queryInsert = {
		text: 'INSERT INTO todos( title, place, description, status) VALUES($1, $2, $3, $4) RETURNING *',
		values: [title, place, description, status],
	}
	client.query(queryInsert, (err, response) => {
		if (err) {
			console.log(err, response);
			let error = new Error("Failed to save");
			return callback(error, null);
		}

		callback(null, { success: true });
	})
}

function updateTodo(call, callback) {

	let { _id, title, place, description, status } = call.request.todo;

	const queryUpdate = {
		text: 'UPDATE todos SET title= ($1), place=($2), description =($3), status=($4)  WHERE _id = ($5) ',
		values: [title, place, description, status, _id],
	}
	client.query(queryUpdate, (err, response) => {
		if (err) {
			console.log(err, response);
			let error = new Error("Failed to update");
			return callback(error, null);
		}

		callback(null, { success: true });
	})

}
function deleteTodo(call, callback) {

	let _id = call.request._id

	const queryDelete = {
		text: 'DELETE FROM todos  WHERE _id = ($1) RETURNING *',
		values: [_id]
	}
	client.query(queryDelete, (err, response) => {
		if (err) {
			console.log(err, response);
			let error = new Error("Failed to delete");
			return callback(error, null);
		}

		callback(null, { success: true });
	})

}

function getSingleTodo(call, callback) {

	let _id = call.request._id

	const queryOneTodo = {
		text: 'SELECT * FROM todos WHERE _id = ($1) ',
		values: [_id]
	}

	client.query(queryOneTodo, (err, todos) => {

		if (err || !todos.rows.length) {
			console.log(err, todos);
			let error = new Error("Failed to find todo");
			return callback(error, null);
		}

		callback(null, { todo: todos.rows[0] });
	})

}


module.exports = { getTodos, saveTodo, updateTodo, deleteTodo, getSingleTodo }