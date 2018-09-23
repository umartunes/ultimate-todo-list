
import todos from '../../redux/reducers/reducer-todos';
import fakeTodos from "../fakeTodo";


let state = {
	todos: fakeTodos,
	error: null,
	isLoading: false
};
describe("Todo Reducer", () => {

	it("Sets default state", () => {
		const result = todos(undefined, { type: "@@INIT" });
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
		const result = todos(state, {
			type: "PUSH_TODOS",
			payload: { todo: todoItem }
		});
		expect(result).toEqual(Object.assign({}, state, { todos: [...state.todos, todoItem] }));
	});

	it("Should Remove todo", () => {
		const result = todos(state, {
			type: "REMOVE_TODO",
			payload: { id: "2" }
		});
		expect(result).toEqual({
			todos: [fakeTodos[0], fakeTodos[2]],
			error: null,
			isLoading: false
		});
	});

	it("Should not Remove todo as Id is Invalid", () => {
		const result = todos(state, {
			type: "REMOVE_TODO",
			payload: { id: "5" }
		});
		expect(result).toEqual(state);
	});

	// it("Should Update the todo", () => {
	// 	const result = todos(state, {
	// 		type: "EDIT_TODO",
	// 		payload: { id: "1" }
	// 	});
	// 	expect(result.todos[0].status).toEqual('completed');
	// });

	// it("Should not Update the todo as Id is invalid", () => {
	// 	const result = todos(state, {
	// 		type: "EDIT_TODO",
	// 		payload: { id: "5" }
	// 	});
	// 	expect(result).toEqual(state);
	// });
});
