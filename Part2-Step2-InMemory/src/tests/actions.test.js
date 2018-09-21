import { setTodos, pushTodos, deleteTodo, editStatus } from "../redux/actions/actions-todos";

describe("Todos Actions", () => {

	it("Set Default Todos in redux", () => {
		const result = setTodos([]);
		expect(result).toEqual({
			type: "SET_TODOS_PAYLOAD",
			payload: { todos: [] }
		});
	});

	it("Adds a new TODO", () => {
		const result = pushTodos({
			id: "123",
			title: "Title",
			description: "description",
			status: 'pending'
		});
		expect(result).toEqual({
			type: 'PUSH_TODOS',
			payload: {
				todo: {
					id: "123",
					title: "Title",
					description: "description",
					status: 'pending'
				}
			}
		});
	});


	it("Deletes TODO", () => {
		const result = deleteTodo(12);
		expect(result).toEqual({
			type: 'DELETE_TODO',
			payload: { id: 12 }
		});
	});

	it("Changes status of todo", () => {
		const result = editStatus("Completed");
		expect(result).toEqual({
			type: 'EDIT_STATUS',
			payload: { title: "Completed" }
		});
	});

});
