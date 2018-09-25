// SHOW TODO
export const setTodos = (todos) => {
    return {
        type: 'SET_TODOS_PAYLOAD',
        payload: { todos }
    }
}

// INSERT TODO
export const pushTodos = (todo) => {
    return {
        type: 'PUSH_TODOS',
        payload: { todo },
    }
}

// REMOVE TODO
export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        payload: { id },
    }
}

// EDIT CHECKBOX STATUS
export const EditStatus = (id) => {
    return {
        type: 'EDIT_STATUS',
        payload: { id },
    }
}

export const EditStatusAction = (id, status) => {
    return (dispatch, getState) => {
        dispatch(EditStatus(id, status))
    }
}

// EDIT TODO
export const startEditTodo = (todo) => {
    return {
        type: 'EDIT_TODO',
        payload: { todo },
    }
};
