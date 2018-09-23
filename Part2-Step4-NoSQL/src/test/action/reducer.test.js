import todosReducer from '../../redux/reducers/reducer-todos'

import fakeTodo from '../fakeTodo'

const initialState = {
    todos: fakeTodo,
    error: null,
    isLoading: false,

}
describe('Testing Todo Reducer', () => {

    it("Set Default State", () => {

        const result = todosReducer(undefined, { type: '@@INIT' })

        expect(result).toEqual({
            todos: [],
            error: null,
            isLoading: false,
        })
    })

    it("Should Add New Todo", () => {
        
        let todoItem = {
            _id: "1",
            title: "Title",
            place: 'E-Liberary',
            description: "description",
            status: 'pending'
        };

        const result = todosReducer(initialState, {

            type: 'PUSH_TODO',
            payload: { todo: todoItem }

        });

        expect(result).toEqual(Object.assign({}, initialState, { todos: [...initialState.todos, todoItem] }))

    });

    it("should Remove Todo", () => {
        const result = todosReducer(initialState, {

            type: 'DELETE_TODO',
            payload: { id: '2' }
        })
        expect(result).toEqual({

            todos: [fakeTodo[0], fakeTodo[2]],
            error: null,
            isLoading: false
        })
    });


    it("Should not Remove Todo as ID is Invalid", () => {

        const result = todosReducer(initialState, {

            type: "DELETE_TODO",
            payload: { _id: "5" }

        });

        expect(result).toEqual(initialState);

    });

    it("Should Update The Todo", () => {

        const result = todosReducer(initialState, {

            type: 'EDIT_STATUS',
            payload: { _id: "2" }

        });

        expect(result.todos[1].status).toEqual('completed')

    });

    it("Should not Update the todo as Id is invalid", () => {

        const result = todosReducer(initialState, {

            type: "EDIT_STATUS",
            payload: { _id: "5" }

        });

        expect(result).toEqual(initialState);

    });
})