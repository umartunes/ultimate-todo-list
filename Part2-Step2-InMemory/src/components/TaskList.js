import React from "react";
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteTodo, editStatus } from '../redux/actions/actions-todos'

class TaskList extends React.Component {

    render() {

        const {todo, dispatch} = this.props
        return (
            <React.Fragment>
                <div className="row card taskListBorder" >
                    <div className="col s1">
                        <label>
                            <input type="checkbox" defaultChecked={todo.status !== 'pending'} className="filled-in" onChange={ ()=> dispatch( editStatus( todo._id ) )} />
                            <span></span>
                        </label>
                    </div>
                    <div className="col s8 truncate">
                        {todo.status === 'pending' ? todo.title : (<s>{todo.title}</s>) }

                    </div>
                    <div className="col s3 right-align red-text tex-darken-4 right-align">
                        <button className="btn-small red waves-effect waves-lighten hoverable" onClick={() => dispatch( deleteTodo( todo._id ) )} ><FontAwesomeIcon icon="trash-alt" size="1x" /> Delete</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    console.log(ownProps)

    return {
        todo: ownProps.todo
    }
}

export default connect(mapStateToProps)(TaskList)