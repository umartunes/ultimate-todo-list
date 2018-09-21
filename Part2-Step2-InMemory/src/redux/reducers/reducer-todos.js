const initialState = {
    todos: [],
    error: null,
    isLoading: false
}

const todosReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_TODOS_PAYLOAD':

            return Object.assign({}, state, { todos: action.payload.todos }, { isLoading: false })

        case 'PUSH_TODOS':

            return Object.assign({}, state, { todos: [...state.todos, action.payload.todo] })

        case 'DELETE_TODO':

            return Object.assign({}, state, { todos: state.todos.filter(todo => action.payload._id !== todo._id) })

        case 'EDIT_STATUS':

            return Object.assign({}, state, {
                todos: state.todos.map(todo => {
                    if( todo._id === action.payload._id )
                        todo.status = todo.status !== 'completed' ? 'completed' : 'pending'

                    return todo
                })
            })

        default:
            return state;

    }

}

export default todosReducer;