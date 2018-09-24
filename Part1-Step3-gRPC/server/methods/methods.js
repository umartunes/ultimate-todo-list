const Todos = require("../models/model-todos");

function getTodos(call, callback) {

	let $query = {}

	Todos.find($query).sort({ date: -1 }).exec((err, todos) => {

		if (err) {
			console.log(err, todo);
			let error = new Error("Failed while querying");
			return callback(error, null);
		}

		todos.forEach(function (todo) {
			call.write({ todo: todo });
		});

		call.end();

	})

}

function saveTodo(call, callback) {

	let { id, title, place, description, status } = call.request.todo;
	let todo = new Todos({ title, place, description, status });

	todo.save(function (err, todo) {

		if (err) {
			console.log(err, todo);
			let error = new Error("Failed to save");
			return callback(error, null);
		}

		callback(null, { success: true });

	})
}

function updateTodo(call, callback) {

	let { _id, title, place, description, status } = call.request.todo;

	Todos.findByIdAndUpdate(_id, { title, place, description, status }).exec(function (err, todo) {

		if (err) {
			console.log(err, todo);
			let error = new Error("Failed to update");
			return callback(error, null);
		}

		callback(null, { success: true });

	})

}
function deleteTodo(call, callback) {

	let _id = call.request._id

	Todos.findByIdAndRemove(_id).exec(function (err, todo) {

		if (err) {
			console.log(err, todo);
			let error = new Error("Failed to delete");
			return callback(error, null);
		}

		callback(null, { success: true });

	})

}

function getSingleTodo(call, callback) {

	let _id = call.request._id
	
	Todos.findById(_id).exec(function (err, todo) {

		if (err || !todo) {
			console.log(err, todo);
			let error = new Error("Failed to find todo");
			return callback(error, null);
		}

		callback(null, { todo: todo });

	})

}


module.exports = { getTodos, saveTodo, updateTodo, deleteTodo, getSingleTodo }