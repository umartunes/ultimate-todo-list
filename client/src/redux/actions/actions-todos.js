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

export const editStatus = (title) => {
    return {
        type: 'EDIT_STATUS',
        payload: { title }
    }
}



export const fetch = () => {

    // params = params || {}

    return (dispatch, getState) => {

        dispatch(setLoading())

        axios.get(window.baseURL + `/api/todos/`)
            .then(response => response.data)
            .then(result => dispatch(setTodos(result.data)))
            .catch(error => { console.log("error", error) })

    }

}

// export const fetchSingle = (_id) => {

//     return (dispatch, getState) => {

//         dispatch(setLoading())

//         axios.get(window.baseURL + `/api/ads/${_id}/`)
//             .then(response => response.data)
//             .then(todo => dispatch(setCurrentAd(todo)))
//             .catch(error => dispatch(setError(error)))

//     }

// }

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

            })
            .catch(error => { console.log("errror form server ", error) })

    }

}

export const deleteSingle = (_id) => {

    return (dispatch, getState) => {

        dispatch(setLoading())

        axios.delete(window.baseURL + `/api/todos/${_id}/`)
            .then(response => response.data)
            .then(result => {
                dispatch(deleteTodo(result.data._id))
            })
            .catch(error => dispatch(setError(error)))

    }

}
