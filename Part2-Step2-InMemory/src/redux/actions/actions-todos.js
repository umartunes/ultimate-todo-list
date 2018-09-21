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

export const deleteTodo = _id => {

    return {
        type: 'DELETE_TODO',
        payload: { _id }
    }
}

export const editStatus = (_id) => {
    return {
        type: 'EDIT_STATUS',
        payload: { _id }
    }
}