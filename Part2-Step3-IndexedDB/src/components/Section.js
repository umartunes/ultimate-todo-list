import React from 'react'
import { Link } from 'react-router-dom'
import TodoList from './TodoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Section extends React.Component {

    render() {
        return (
            <React.Fragment>
                <main className="tod-List-Setting" >
                    <TodoList />
                </main>
                <div className="fixed-action-btn">
                    <Link to="/create" className="btn-floating btn-large waves-effect waves-light hoverable sky-blue">
                        <FontAwesomeIcon icon="plus" size="1x" />
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}
export default Section
