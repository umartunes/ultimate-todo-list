import React from "react";
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteSingle } from '../redux/actions/actions-todos'
import M from 'materialize-css/dist/js/materialize.min.js'
import { Link } from 'react-router-dom'
import Model from "./modelData";



class TaskList extends React.Component {


    instance = null;
    componentDidMount() {

        var elems = document.querySelectorAll('.modal');
        this.instance = M.Modal.init(elems);

    }
    changeStatus = (e) => {

        if (e.target.checked) {
            let updataTodoS = { ...this.props.todo, status: "completed" }

            this.props.updateSatus(this.props.todo._id, updataTodoS)

        }
        else {
            let updataTodoP = { ...this.props.todo, status: "pending" }

            this.props.updateSatus(this.props.todo._id, updataTodoP)

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="row card taskListBorder hoverable" >
                    <div className="col s1">
                        <label>

                            <input type="checkbox" onChange={this.changeStatus} checked={this.props.status === "pending" ? false : true} className="filled-in" />
                            <span></span>
                        </label>
                    </div>
                    <div className="col s9">

                        <a className={this.props.status === "pending" ?
                            "waves-effect waves-light modal-trigger sidenav-font"

                            : "waves-effect waves-light modal-trigger done sidenav-font"
                        } href={`#${this.props.todo._id}`} >
                            {this.props.todo.title}</a>


                    </div>
                    <div className="col s1 center-align blue-text tex-darken-4">
                        <Link to={`/edit/${this.props.todo._id}`} ><FontAwesomeIcon icon="pencil-alt" size="1x" /></Link>

                    </div>
                    <div className="col s1 center-align blue-text tex-darken-4">
                        <FontAwesomeIcon icon="trash-alt" size="1x" className="cursor-setting" onClick={() => this.props.deleteSingle(this.props.todo._id)} />
                    </div>

                </div>

                <Model id={this.props.todo._id} todo={this.props.todo} />
            </React.Fragment>
        )
    }
}

export default connect(null, { deleteSingle })(TaskList)