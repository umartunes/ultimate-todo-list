import React from 'react'
import { Link } from 'react-router-dom'
import TaskList from './TaskList';
import { connect } from 'react-redux'
import { fetch } from '../redux/actions/actions-todos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Section extends React.Component {

    componentWillMount() {

        this.props.fetch()
    }
    render() {
        return (
            <React.Fragment>

                <main style={{ margin: 10 }} >
                    {this.props.todos && this.props.todos.length > 0 ? this.props.todos.map((todo, i) => {
                        return <TaskList key={i} todo={todo} />

                    }) : <p>No TaskLis</p>}


                </main>

                {/* <!-- Fixed Floating Action Button --> */}
                <div className="fixed-action-btn">
                    <Link to="/create" className="btn-floating btn-large waves-effect waves-light hoverable sky-blue">
                     <FontAwesomeIcon icon="plus" size="1x" />
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}
const getTodoList = (state) => {

    return {
        todos: state.todos.todos
    }
}

export default connect(getTodoList, { fetch })(Section)
