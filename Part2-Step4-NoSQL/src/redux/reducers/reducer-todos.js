
const initialState = {
    todos: [],
    error: null,
    isLoading: false,

}

const todos = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_TODOS_PAYLOAD':

            return Object.assign({}, state, { todos: action.payload.todos })

        case 'PUSH_TODO':

            // ...action.payload.todos

            return Object.assign({}, state, { todos: [...state.todos, action.payload.todo] })

        case 'DELETE_TODO':

            // mobeen add Delete todo reduver
            let newList = state.todos.filter((todo) => {

                return todo._id !== action.payload.id

            })

            return Object.assign({}, state, { todos: newList })


        case 'EDIT_STATUS':

            // mobeen add Edit Status reduver
            return Object.assign({}, state, {

                todos: state.todos.map(todo => {
                    if (todo._id === action.payload._id)
                        todo.status = todo.status !== 'completed' ? 'completed' : 'pending'

                    return todo
                })
            })


        default:
            return state;

    }

}

export default todos;