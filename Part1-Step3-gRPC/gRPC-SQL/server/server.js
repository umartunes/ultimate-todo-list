const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const protoPath = require("path").join(__dirname + "/proto", "services.proto");
const services = protoLoader.loadSync(protoPath);

const methods = require('./methods/methods')

const server = new grpc.Server();

server.addService(services.TodoService, {
	GetTodos: methods.getTodos,
	SaveTodo: methods.saveTodo,
	UpdateTodo: methods.updateTodo,
	DeleteTodo: methods.deleteTodo,
	GetSingleTodo: methods.getSingleTodo
});

const PORT = 5005;
const credentials = grpc.ServerCredentials.createInsecure();

server.bind(`0.0.0.0:${PORT}`, credentials);
console.log(`server listening on port ${PORT}`);
server.start();