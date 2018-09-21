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

export const editStatus = (title) => {
    return {
        type: 'EDIT_STATUS',
        payload: { title }
    }
}