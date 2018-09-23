import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import M from 'materialize-css/dist/js/materialize.min.js'
import '../css/custom.css'
import { Link } from 'react-router-dom'
import todo from '../images/todo.png';
class SideNave extends React.Component {

    instance = null;
    componentDidMount() {
        var elem = document.querySelectorAll('.sidenav');
        this.instance = M.Sidenav.init(elem);
    }

    render() {

        return (
            <React.Fragment>
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li>
                        <div className="row">
                            <div className="col s12 center-align">
                                <img src={todo} alt="Todo" style={{width:'60%',margin:'auto'}} className="circle center-align hoverable" />
                            </div>
                        </div>
                    </li>

                    <li>
                        <Link to="/create" className="waves-effect sidenav-font" >
                            <FontAwesomeIcon icon="plus" className="blue-text tex-darken-4"
                                size="1x" style={{ marginRight: 10 }} />
                            Add New Todo</Link>
                    </li>
                    <hr />
                    <li>
                        <Link to="/" className="waves-effect sidenav-font"  >
                            <FontAwesomeIcon icon="list-ul" className="blue-text tex-darken-4"
                                size="1x" style={{ marginRight: 10 }} />
                            Todo List</Link>
                    </li>
                </ul>
                <a href="/" data-target="slide-out" className="sidenav-trigger" >
                    <FontAwesomeIcon icon="bars" size="1x" className="white-text" />
                </a>
            </React.Fragment>
        )
    }
}

export default SideNave;