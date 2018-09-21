import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteTodo, editStatus } from '../redux/actions/actions-todos'

class Section extends React.Component {

    loopItems = () => {

        const { todos, dispatch } = this.props

        return todos.map((todo, i) => {

            return <React.Fragment key={i}>
                <div className="row card taskListBorder" >
                    <div className="col s1">
                        <label>
                            <input type="checkbox" defaultChecked={todo.status !== 'pending'} className="filled-in" onChange={() => dispatch(editStatus(todo._id))} />
                            <span></span>
                        </label>
                    </div>
                    <div className="col s8 truncate">
                        {todo.status === 'pending' ? todo.title : (<s>{todo.title}</s>)}

                    </div>
                    <div className="col s3 right-align red-text tex-darken-4 right-align">
                        <button className="btn-small red waves-effect waves-lighten hoverable" onClick={() => dispatch(deleteTodo(todo._id))} ><FontAwesomeIcon icon="trash-alt" size="1x" /> Delete</button>
                    </div>
                </div>
            </React.Fragment>

        })

    }

    render() {

        return (
            <React.Fragment>

                <main style={{ margin: 10 }} >
                    {this.props.todos ? this.loopItems() : <p>There are no tasks in your list</p>}
                </main>

                {/* <!-- Fixed Floating Action Button --> */}
                <div className="fixed-action-btn">
                    <Link to="/create" className="btn-floating btn-large waves-effect waves-light hoverable sky-blue">
                        <FontAwesomeIcon icon="plus" size="lg" />
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        todos: state.todos.todos
    }
}

export default connect(mapStateToProps)(Section)
