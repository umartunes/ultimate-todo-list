import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import M from 'materialize-css/dist/js/materialize.min.js'
import '../css/custom.css'
import { Link } from 'react-router-dom'
class SideNave extends React.Component {

    instance = null;
    componentDidMount() {
        var elem = document.querySelectorAll('.sidenav');
        this.instance = M.Sidenav.init(elem);
    }
    componentWillUnmount() {
        // this.instance.destroy()
    }
    render() {

        return (
            <React.Fragment>

                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <p>Project To-Do</p>
                    <li><Link to="/" className=" waves-effect sidenav-font" >

                        <FontAwesomeIcon icon="sun" className=" blue-text tex-darken-4"

                            size="1x" style={{ marginRight: 10 }} />

                        My Day</Link>

                    </li>

                    <li><a href="/" className=" waves-effect sidenav-font" >

                        <FontAwesomeIcon icon="star" className=" blue-text tex-darken-4"

                            size="1x" style={{ marginRight: 10 }} />

                        Importan</a>

                    </li>

                    <li>
                        <a href="/" className="waves-effect sidenav-font" >

                            <FontAwesomeIcon icon="home" className="blue-text tex-darken-4"

                                size="1x" style={{ marginRight: 10 }} />

                            Tasks</a>
                    </li>
                    <hr />

                    <li>
                        <Link to="/create" className="waves-effect sidenav-font"  >

                            <FontAwesomeIcon icon="list-ul" className="blue-text tex-darken-4"

                                size="1x" style={{ marginRight: 10 }} />

                            Tasks</Link>
                    </li>
                </ul>

            </React.Fragment>
        )
    }
}

export default SideNave;