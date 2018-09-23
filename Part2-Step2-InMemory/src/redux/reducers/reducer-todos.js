

const initialState = {
    todos: [],
    error: null,
    isLoading: false,

}

const todos = (state = initialState, action) => {

    switch (action.type) {
        case 'PUSH_TODOS':
            // console.log('v',[...state.todos, action.payload.todo]);
            return Object.assign({}, state, { todos: [...state.todos, action.payload.todo] })

        case 'REMOVE_TODO':
            let todoItem = state.todos.filter(todo => todo.id !== action.payload.id)
            return Object.assign({}, state, {
                todos: todoItem
            })

        case 'EDIT_TODO':
            return state.todos.map(
                (todos) => {

                    if (todos.id === action.id) {
                        return { ...todos, ...action.updates }

                    }
                    else {
                        return todos;
                    }
                }
            );
        case 'EDIT_STATUS':
            return Object.assign({}, state, {
                todos: state.todos.map((todos) => {

                    if (todos.id === action.payload.id)
                        todos.status = !todos.status

                    return todos


                }
                )
            })
        default:
            return state;

    }

}

export default todos;