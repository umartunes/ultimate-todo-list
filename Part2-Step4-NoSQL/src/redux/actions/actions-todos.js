import axios from 'axios'

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
        type: 'CURRENT_TODO',
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
        type: 'PUSH_TODO',
        payload: { todo }
    }
}

export const unshiftTodos = todos => {

    return {
        type: 'UNSHIFT_TODOS',
        payload: { todos }
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

export const editStatus = (_id) => {
    return {
        type: 'EDIT_STATUS',
        payload: { _id }
    }
}



export const fetch = () => {

    // params = params || {}

    return (dispatch, getState) => {

        dispatch(setLoading())

        axios.get(window.baseURL + `/api/todos/`)
            .then(response => response.data)
            .then(result => dispatch(setTodos(result.data)))
            .catch(error => { dispatch(setError(error)) })

    }

}

export const fetchSingle = (_id) => {

    return (dispatch, getState) => {

        dispatch(setLoading())

        axios.get(window.baseURL + `/api/todos/${_id}/`)
            .then(response => response.data)
            .then(todo => dispatch(setCurrentTodo(todo)))
            .catch(error => dispatch(setError(error)))

    }

}

export const postTodo = (formData) => {

    // let config = {
    //     headers: { 'Content-Type': 'multipart/form-data' },
    //     // onUploadProgress: function (progressEvent) {
    //     //     var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    //     // }
    // };

    return (dispatch, getState) => {

        dispatch(setLoading())

        axios.post(window.baseURL + `/api/todos/`, formData, )
            .then(response => response.data)
            .then(data => {
                dispatch(pushTodos(data.data))
                window.notify("Todo Data Has Been Saved")

            })
            .catch(error => { dispatch(setError(error)) })

    }

}

export const updateTodo = (id, formData) => {

    // let config = {
    //     headers: { 'Content-Type': 'multipart/form-data' },
    //     // onUploadProgress: function (progressEvent) {
    //     //     var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    //     // }
    // };

    return (dispatch, getState) => {

        dispatch(setLoading())

        axios.put(window.baseURL + `/api/todos/${id}`, formData, )
            .then(response => response.data)
            .then(data => {
                console.log('Todo Has Been Updated', data)
                window.notify("Todo Has Been Updated")

            })
            .catch(error => { dispatch(setError(error)) })

    }

}
export const updateSatus = (id, formData) => {


    return (dispatch, getState) => {

        dispatch(setLoading())

        axios.put(window.baseURL + `/api/todos/${id}`, formData)
            .then(response => response.data)
            .then(data => {
                //console.log('Todo Has Been Updated', data)


                dispatch(editStatus(id))

            })
            .catch(error => { dispatch(setError(error)) })

    }

}



export const deleteSingle = (_id) => {

    return (dispatch, getState) => {

        dispatch(setLoading())

        axios.delete(window.baseURL + `/api/todos/${_id}/`)
            .then(response => response.data)
            .then(result => {
                dispatch(deleteTodo(result.data._id))
                window.notify("One Todo Data Has Been Deleted")
            })
            .catch(error => dispatch(setError(error)))

    }

}
