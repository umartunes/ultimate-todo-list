import React from 'react'
import { Link } from 'react-router-dom'
import TaskList from './TaskList';
import { connect } from 'react-redux'

class Section extends React.Component {
    state = {
        TaskLis: [
            {
                title: 'Fron End',
                location: 'E-Liberary',
                description: 'i will complete my Front End Today at E-Liaberary'
            },
            {
                title: 'Back End',
                location: 'E-Liberary',
                description: 'i will complete my Back End Today at E-Liaberary'
            },
            {
                title: 'Crud',
                location: 'E-Liberary',
                description: 'i will complete my Crud Operation Today at E-Liaberary'
            },

        ]
    }
    render() {
        return (
            <React.Fragment>

                <main style={{ margin: 10 }} >
                    {this.props.todo.length > 0 ? this.state.TaskLis.map((task, i) => {
                        return <TaskList key={i} task={task} />

                    }) : <p>No TaskLis</p>}


                </main>

                {/* <!-- Fixed Floating Action Button --> */}
                <div className="fixed-action-btn">
                    <Link to="/create" className="btn-floating btn-large waves-effect waves-light hoverable sky-blue">
                        <i className="large material-icons">add</i>

                    </Link>
                </div>
            </React.Fragment>
        )
    }
}
const getTodoList = (state) => {

    return {
        todo: state.todos.todos
    }
}

export default connect(getTodoList,null)(Section)
