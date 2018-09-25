const initialState = {
    todos: [],
    error: null,
    isLoading: false,
}

const todos = (state = initialState, action) => {

    switch (action.type) {
        case 'PUSH_TODOS':
            return Object.assign({}, state, { todos: [...state.todos, action.payload.todo] })

        case 'REMOVE_TODO':
            let todoItem = state.todos.filter(todo => todo.id !== action.payload.id)
            return Object.assign({}, state, {
                todos: todoItem
            })

        case 'EDIT_TODO':
            
            return Object.assign({}, state, {

                todos: state.todos.map((todo) => {

                    if (todo.id === action.payload.todo.id)
                        todo = action.payload.todo

                    return todo
                })
            })
        case 'EDIT_STATUS':
            return Object.assign({}, state, {

                todos: state.todos.map((todos) => {

                    if (todos.id === action.payload.id)
                        todos.status = !todos.status

                    return todos


                })
            })
        default:
            return state;

    }

}

export default todos;