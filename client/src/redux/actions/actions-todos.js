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
                dispatch({
                    type: 'PUSH_TODOS',
                    payload: { todo },
                });
            });
    }
}


// SHOW TODO

export const setTodos = () => {
    return (dispatch, getState) => {
        db.todos
            .toArray()
            .then((todos) => {
                dispatch({
                    type: 'SET_TODOS_PAYLOAD',
                    payload: { todos }
                });
            });
    }
}


// REMOVE TODO

export const removeTodo = (id) => {
    console.log("Deleted Id",id);
    return (dispatch, getState) => {
        db.todos
            .where("id").equals(id)
            .delete()
            .then((deleteCount) => {
                // console.log("Deleted " + deleteCount + " objects");
                dispatch({
                    type: 'REMOVE_TODO',
                    payload: { id },
                });
            });
    }
}

// EDIT TODO
///////////////////////////////

// export const startEditTodo = (id, updates) => (
//     {
//     type: 'EDIT_TODO',
//     id: id,
//     updates: updates
// });
export const startEditTodo = (id, updates) => {
   
    return (dispatch) => {
        db.todos
          .update(id,  updates )
          .then((e) => {
              
            // dispatch({
            //   type: 'EDIT_TODO',
            //   id: id,
            //   updates: updates
            // });
          });
      };
};
// export const startEditTodo=(id, updates)=> {
//     return (dispatch) => {
//       db.table('todos')
//         .update(id, { updates })
//         .then(() => {
//           dispatch({
//             type: 'EDIT_TODO',
//             payload: { id, updates },
//           });
//         });
//     };
//   }


///////////////////////////////////

export const unshiftTodos = todos => {

    return {
        type: 'UNSHIFT_TODOS',
        payload: { todos }
    }
}

export const fetch = (params) => {

    params = params || {}

    return (dispatch, getState) => {

        dispatch(setLoading())

        axios.get(window.baseURL + `/api/todos/`, { params: params })
            .then(response => response.data)
            .then(todos => dispatch(setTodos(todos)))
            .catch(error => dispatch(setError(error)))

    }

}

export const fetchSingle = (_id) => {

    return (dispatch, getState) => {

        dispatch(setLoading())

        axios.get(window.baseURL + `/api/ads/${_id}/`)
            .then(response => response.data)
            .then(todo => dispatch(setCurrentTodo(todo)))
            .catch(error => dispatch(setError(error)))

    }

}

export const postTodo = (formData, onSuccess, onFailure) => {

    // let config = {
    //     headers: { 'Content-Type': 'multipart/form-data' },
    //     // onUploadProgress: function (progressEvent) {
    //     //     var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    //     // }
    // };

    return (dispatch, getState) => {

        axios.post(window.baseURL + `/api/todos/`, formData)
            .then(response => response.data)
            .then(data => { onSuccess(data) })
            .catch(error => { onFailure(error) })

    }

}