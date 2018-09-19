import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TaskList = (props) => {
    return (
        <React.Fragment>
            <div className="row card" style={{ paddingTop: 25, paddingLeft: 10, paddingRight: 0, paddingBottom: 15 }} >
                <div className="col s1">
                    <label>
                        <input type="checkbox" className="filled-in" />
                        <span></span>
                    </label>
                </div>
                <div className="col s9">
                    {props.task.title}
                </div>
                <div className="col s1 center-align">
                    <FontAwesomeIcon icon="trash-alt" size="1x" />

                </div>
                <div className="col s1 center-align blue-text tex-darken-4">
                    <FontAwesomeIcon icon="trash-alt" size="1x" />

                </div>
            </div>
        </React.Fragment>
    )
}

export default TaskList