import axios from 'axios';
import db from '../../config/firebase';


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
        db.collection("todos")
            .add(todo)
            .then((docRef) => {
                // todo.id = docRef.id
                // dispatch(pushTodosAction(todo));
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
        db.collection("todos")
            .get()
            .then((querySnapshot) => {
               
                let Tododata =[];
                dispatch(setTodosAction([]));
                querySnapshot.forEach((doc) => {

                    let todo = doc.data()
                    todo.id = doc.id;
                    // Tododata.push(todo);
                    dispatch(pushTodosAction(todo));
                    
                })
                // console.log('Hi',Tododata);
                //  dispatch(setTodosAction(Tododata));
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
         db.collection("todos")
            .doc(id).delete()
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
        db.collection("todos").doc(id).update({status: status})
        .then(() => {
            dispatch(EditStatus(id,status))
        })

    }
}

// EDIT TODO
export const startEditTodo = (id, updates) => {

    return (dispatch) => {
        db.collection("todos").doc(id).set(updates)

    };
};
