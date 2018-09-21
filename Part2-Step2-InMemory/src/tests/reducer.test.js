import todosReducer from "../redux/reducers/reducer-todos";
import fakeTodos from "./fakeTodos";
let state = {
	todos: fakeTodos,
	error: null,
	isLoading: false
};
describe("Todo Reducer", () => {

	it("Sets default state", () => {
		const result = todosReducer(undefined, { type: "INIT" });
		expect(result).toEqual({
			todos: [],
			error: null,
			isLoading: false
		});
	});

	it("Should add a new todo", () => {
		let todoItem = {
			_id: "5",
			title: "New ToDo",
			description: "description",
			status: 'pending'
		};
		const result = todosReducer(state, {
			type: "PUSH_TODOS",
			payload: { todo: todoItem }
		});
		expect(result).toEqual(Object.assign({}, state, { todos: [...state.todos, todoItem] }));
	});

	it("Should Remove todo", () => {
		const result = todosReducer(state, {
			type: "DELETE_TODO",
			payload: { _id: "2" }
		});
		expect(result).toEqual({
			todos: [fakeTodos[0], fakeTodos[2]],
			error: null,
			isLoading: false
		});
	});

	it("Should not Remove todo as Id is Invalid", () => {
		const result = todosReducer(state, {
			type: "DELETE_TODO",
			payload: { _id: "5" }
		});
		expect(result).toEqual(state);
	});

	it("Should Update the todo", () => {
		const result = todosReducer(state, {
			type: "EDIT_STATUS",
			payload: { _id: "2" }
		});
		expect(result.todos[1].status).toEqual('completed');
	});

	it("Should not Update the todo as Id is invalid", () => {
		const result = todosReducer(state, {
			type: "EDIT_STATUS",
			payload: { _id: "5" }
		});
		expect(result).toEqual(state);
	});
});
