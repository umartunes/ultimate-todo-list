let blankTodo = {}

const initialState = {
    todos: [],
    error: null,
    isLoading: false,
    currentTodo: blankTodo,
}

const todos = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_TODOS_LOADING':
            return Object.assign({}, state, { isLoading: true, error: null })

        case 'SET_TODOS_PAYLOAD':
            return Object.assign({}, state, action.payload, { isLoading: false })

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
        // case 'EDIT_TODO': {
        //     const todoToUpdate = state.todos.find((todo) => todo.id === action.payload.id);
        //     console.log("reducer",action.payload.id);
        //     return { todos: [
        //       ...state.todos.filter((todo) => todo.id !== action.id),
        //       Object.assign({}, todoToUpdate, { updates: action.updates }),
        //     ] };
        //   }

          
            ////////////////////////////
            // case 'EDIT_EXPENSE':
            // return state.map(
            //     (expense) => {
            //         if (expense.id === action.id) {
            //             return { ...expense, ...action.updates }
            //         }
            //         else {
            //             return expense;
            //         }
            //     }
            // );

            ///////////////////////////////

        // case 'UNSHIFT_TODOS':
        //     return Object.assign({},
        //         state, { todos: [...action.payload.todos, ...state.todos] })

        default:
            return state;

    }

}

export default todos;