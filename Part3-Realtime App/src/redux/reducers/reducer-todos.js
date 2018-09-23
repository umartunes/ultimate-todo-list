

const initialState = {
    todos: [],
    error: null,
    isLoading: false,

}

const todos = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_TODOS_LOADING':
            return Object.assign({}, state, { isLoading: true, error: null })

        case 'SET_TODOS_PAYLOAD':
           let newList ={...state};
           newList.todos =[]
            return Object.assign({}, newList, action.payload, { isLoading: false })

        case 'PUSH_TODOS':
            return Object.assign({}, state, {
                todos: [...state.todos, action.payload.todo]
            })

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