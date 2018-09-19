let blankTodo = {}

// todos: [blankTodo],

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

            // ...action.payload.todos

            return Object.assign({}, state, { todos: [...state.todos, action.payload.todo] })

        case 'DELETE_TODO':

            // mobeen add Delete todo reduver
            let newList = state.todos.filter((todo) => {

                return todo.title != action.payload.title

            })

            return Object.assign({}, state, { todos: newList })

        case 'EDIT_TODO':

            // mobeen add Edit todo reduver
            let updateList = state.todos;

            let index = updateList.findIndex(todo => todo.title == action.payload.todo.title);


          
            if (index >= 0) {
          
                updateList[index] = action.payload.todo
            }
            return Object.assign({}, state, { todos: updateList })


        case 'EDIT_STATUS':
     
            // mobeen add Edit Status reduver
            let updateProgress = state.todos;

            let indexProg = updateProgress.findIndex(todo => todo.title == action.payload.title);


           
            if (indexProg >= 0) {
         
                updateProgress[indexProg].progress = ! updateProgress[indexProg].progress;
            }
            
            return Object.assign({}, state, { todos: updateProgress })



        case 'UNSHIFT_TODOS':

            return Object.assign({}, state, { todos: [...action.payload.todos, ...state.todos] })

        default:
            return state;

    }

}

export default todos;