import React from "react";
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteSingle } from '../redux/actions/actions-todos'
class TaskList extends React.Component {


    render() {
        return (
            <React.Fragment>
                <div className="row card taskListBorder" >
                    <div className="col s1">
                        <label>
                            <input type="checkbox" className="filled-in" />
                            <span></span>
                        </label>
                    </div>
                    <div className="col s9">
                        {this.props.todo.title}
                    </div>
                    <div className="col s1 center-align">
                        <FontAwesomeIcon icon="trash-alt" size="1x" />

                    </div>
                    <div className="col s1 center-align blue-text tex-darken-4">
                        <FontAwesomeIcon icon="trash-alt" size="1x" className="cursor-setting" onClick={() =>this.props.deleteSingle(this.props.todo._id)} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(null, {deleteSingle})(TaskList)