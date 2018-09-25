const grpc = require("grpc");
const protoPath = require("path").join(__dirname + "/server/proto", "services.proto");
const process = require("process");
// const protoLoader = require('@grpc/proto-loader');
// const services = protoLoader.loadSync(protoPath);
const services = grpc.load(protoPath);

const PORT = 5005;
const creds = grpc.credentials.createInsecure();
const Client = new services.TodoService(
	`0.0.0.0:${PORT}`,
	creds
);

const option = parseInt(process.argv[2], 10);
const _id = "5ba896de265eb62600d5d39f";

switch (option) {
	case 1:
		GetTodos();
		break;

	case 2:
		SaveTodo();
		break;

	case 3:
		UpdateTodo();
		break;

	case 4:
		DeleteTodo();
		break;

	case 5:
		GetSingleTodo();
		break;

	default:
		GetTodos();
		break;
}

function GetTodos() {
	const call = Client.GetTodos({});

	call.on("data", function (todo) {
		console.log(todo.todo);
	});
}
function SaveTodo() {
	let todo = {
		_id: _id, 
		title: "GRPC Title Saving",
		place: "working",
		description: "working",
		status: 'pending'
	};
	Client.SaveTodo({ todo: todo }, function (err, response) {
		console.log(err || response);
	});
}

function UpdateTodo() {
	let todo = {
		_id: _id,
		title: "GRPC Title Editing",
		place: "working",
		description: "working",
		status: 'completed'
	};
	Client.UpdateTodo({ todo: todo }, function (err, response) {
		console.log(err || response);
	});
}
function DeleteTodo() {
	Client.DeleteTodo({ _id: _id }, function (err, response) {
		console.log(err || response);
	});
}
function GetSingleTodo() {
	Client.GetSingleTodo({ _id: _id }, function (err, response) {
		console.log(err || response);
	});
}