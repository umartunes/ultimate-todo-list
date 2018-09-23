import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import M from 'materialize-css/dist/js/materialize.min.js'
import Model from "./modelData";
class TodoListItem extends React.Component {
    instance = null;
    componentDidMount() {

        var elems = document.querySelectorAll('.modal');
        this.instance = M.Modal.init(elems);

    }
    changeStatus = () => {

        this.props.EditStatus(this.props.data.id, { status: !this.props.status })
    }

    render() {

        return (
            <div className="row card hoverable" style={{ paddingTop: 25, paddingLeft: 10, paddingRight: 0, paddingBottom: 15 }} >
                <div className="col s1">
                    <label>
                        <input type="checkbox" onChange={this.changeStatus} checked={this.props.status} className="filled-in" />
                        <span></span>
                    </label>
                </div>



                <div className="col s9">

                    <a className={this.props.data.status ?
                        "waves-effect waves-light modal-trigger done sidenav-font"

                        : "waves-effect waves-light modal-trigger  sidenav-font"
                    } href={`#${this.props.data.id}`} >
                         {this.props.data.title}</a>
                   

                </div>

                <div className="col s1 center-align blue-text tex-darken-4">
                    <Link to={`/edit/${this.props.data.id}`}>
                        <FontAwesomeIcon icon="pencil-alt" size="1x" style={{ cursor: 'pointer' }} />
                    </Link>
                </div>
                <div className="col s1 center-align blue-text tex-darken-4">
                    <FontAwesomeIcon icon="trash-alt" size="1x" onClick={() => this.props.onRemove(this.props.data.id)} style={{ cursor: 'pointer' }} />
                </div>
                
                <Model id={this.props.data.id} todo={this.props.data} />
            </div>
        )
    }
}

export default TodoListItem;