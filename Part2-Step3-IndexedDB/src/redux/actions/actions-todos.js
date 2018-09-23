import axios from 'axios';
import db from '../../config/db';


export const setLoading = () => {
    return {
        type: 'SET_TODOS_LOADING',
        payload: 1
    }
}

export const setError = error => {
    return {
        type: 'SET_TODOS_PAYLOAD',
        payload: { error }
    }
}
export const unsetError = () => {
    return {
        type: 'SET_TODOS_PAYLOAD',
        payload: { error: null }
    }
}

export const setCurrentTodo = todo => {

    return {
        type: 'SET_TODOS_PAYLOAD',
        payload: { currentTodo: todo }
    }
}



// INSERT TODO
export const pushTodos = (todo) => {
    return (dispatch, getState) => {
        db.todos
            .add(todo)
            .then((id) => {
                dispatch(pushTodosAction(todo));
            });
    }
}
export const pushTodosAction = (todo) => {
    return {
        type: 'PUSH_TODOS',
        payload: { todo },
    }
}


// SHOW TODO

export const setTodos = () => {
    return (dispatch, getState) => {
        db.todos
            .toArray()
            .then((todos) => {
                dispatch(setTodosAction(todos));
            });
    }
}

export const setTodosAction = (todos) => {
    return {
        type: 'SET_TODOS_PAYLOAD',
        payload: { todos }
    }
}

// REMOVE TODO

export const removeTodo = (id) => {
    return (dispatch, getState) => {
        db.todos
            .where("id").equals(id)
            .delete()
            .then((deleteCount) => {

                dispatch(removeTodoAction(id));
            });
    }
}

export const removeTodoAction = (id) => {
    return {
        type: 'REMOVE_TODO',
        payload: { id },
    }
}
export const EditStatus = (id) => {
    return {
        type: 'EDIT_STATUS',
        payload: { id },
    }
}

export const EditStatusAction = (id,status) => {
    return (dispatch, getState) => {
        db.todos
            .update(id, status)
            dispatch(EditStatus(id,status))


    }
}

// EDIT TODO
export const startEditTodo = (id, updates) => {

    return (dispatch) => {
        db.todos
            .update(id, updates)

    };
};
