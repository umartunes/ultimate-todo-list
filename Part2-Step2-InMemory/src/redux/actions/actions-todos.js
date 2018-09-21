export const setLoading = () => {
    return {
        type: 'SET_TODOS_LOADING',
        payload: 1
    }
}

export const setCurrentTodo = todo => {

    return {
        type: 'SET_TODOS_PAYLOAD',
        payload: { currentTodo: todo }
    }
}

export const setTodos = todos => {
    return {
        type: 'SET_TODOS_PAYLOAD',
        payload: { todos }
    }
}

export const pushTodos = todo => {

    return {
        type: 'PUSH_TODOS',
        payload: { todo }
    }
}

export const deleteTodo = id => {

    return {
        type: 'DELETE_TODO',
        payload: { id }
    }
}

export const editTodo = (todo) => {
    return {
        type: 'EDIT_TODO',
        payload: { todo }
    }
}

export const editStatus = (title) => {
    return {
        type: 'EDIT_STATUS',
        payload: { title }
    }
}