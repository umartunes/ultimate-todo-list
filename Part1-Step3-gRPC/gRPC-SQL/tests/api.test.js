const grpc = require("grpc");
const protoPath = require("path").join(__dirname, "/../server/proto/services.proto");
// const protoLoader = require('@grpc/proto-loader');
// const services = protoLoader.loadSync(protoPath);
const services = grpc.load(protoPath);

const PORT = 5005;
const creds = grpc.credentials.createInsecure();
const Client = new services.TodoService(
	`0.0.0.0:${PORT}`,
	creds
);
const _id = "5ba896de265eb62600d5d39f";

test("test for adding a new todo", () => {
	let todo = {
		_id: _id,
		title: "GRPC Title Saving",
		place: "working",
		description: "working",
		status: 'pending'
	};
	Client.SaveTodo({ todo: todo }, function (err, response) {
		if (!err) {
			expect(response).not.toBeNull();
		} else {
			console.log("Error:", err.message);
		}
	});
});

test("test for udating a todo", () => {
	let todo = {
		_id: _id,
		title: "GRPC Title Editing",
		place: "working",
		description: "working",
		status: 'completed'
	};
	Client.UpdateTodo({ todo: todo }, function (err, response) {
		if (!err) {
			expect(response).not.toBeNull();
		} else {
			console.log("Error:", error.message);
		}
	});
});

test("test for deleting a todo", () => {
	Client.DeleteTodo({ _id: _id }, function (err, response) {
		if (!err) {
			expect(response).not.toBeNull();
		} else {
			console.log("Error:", err.message);
		}
	});
});

test("test for getting single todo", () => {
	Client.GetSingleTodo({ _id: _id }, function (err, response) {
		if (!err) {
			expect(response).not.toBeNull();
		} else {
			console.log("Error:", err.message);
		}
	});
});
