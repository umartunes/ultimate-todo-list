"use strict";
const path = require("path");
const PROTO_PATH = path.join(__dirname + "/server/proto", "services.proto");
const process = require("process");
const grpc = require("grpc");
// const protoLoader = require('@grpc/proto-loader');
// const serviceDefinition = protoLoader.loadSync(PROTO_PATH);
const serviceDefinition = grpc.load(PROTO_PATH);

const PORT = 5005;
const creds = grpc.credentials.createInsecure();
const client = new serviceDefinition.TodoService(
	`0.0.0.0:${PORT}`,
	creds
);

const option = parseInt(process.argv[2], 10);
const _id = "5ba896de265eb62600d5d39f";

switch (option) {
	case 1:
		GetTodos(client);
		break;

	case 2:
		SaveTodo(client, _id);
		break;

	case 3:
		UpdateTodo(client, _id);
		break;

	case 4:
		DeleteTodo(client, _id);
		break;

	case 5:
		GetSingleTodo(client, _id);
		break;

	default:
		GetTodos(client);
		break;
}

function GetTodos(client) {
	const call = client.GetTodos({});

	call.on("data", function (todo) {
		console.log(todo.todo);
	});
}
function SaveTodo(client, _id) {
	let todo = {
		_id: _id, 
		title: "GRPC Title Saving",
		place: "working",
		description: "working",
		status: 'pending'
	};
	client.SaveTodo({ todo: todo }, function (err, response) {
		console.log(err || response);
	});
}

function UpdateTodo(client, _id) {
	let todo = {
		_id: _id,
		title: "GRPC Title Editing",
		place: "working",
		description: "working",
		status: 'completed'
	};
	client.UpdateTodo({ todo: todo }, function (err, response) {
		console.log(err || response);
	});
}
function DeleteTodo(client, _id) {
	client.DeleteTodo({ _id: _id }, function (err, response) {
		console.log(err || response);
	});
}
function GetSingleTodo(client, _id) {
	client.GetSingleTodo({ _id: _id }, function (err, response) {
		console.log(err || response);
	});
}