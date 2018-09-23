import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import TodoForm from './TodoForm';
import SideNave from './SideNave';
import { startEditTodo } from '../redux/actions/actions-todos';



export class EditTodoPage extends React.Component {

    onSubmit = (todo) => {
        this.props.startEditTodo(this.props.todos.id, todo);
        this.props.history.push('/');
    };

    render() {
        return (
            <main id="to-do_main">
                <SideNave />
                <div className="row">
                    <div className="container">
                        <div className="col s12">
                            <h5 className="white-text center-align">Edit Todo</h5>
                            <Link to="/" className="backButton white-text">
                                <FontAwesomeIcon icon="long-arrow-alt-left" className=" fs-32 white-text" size="2x" />
                            </Link>
                        </div>
                    </div>
                </div>
                <TodoForm
                    data={this.props.todos}
                    onSubmit={this.onSubmit}
                />
            </main>
        );
    };
}


const mapStateToProps = (state, props) => ({
    todos: state.todos.todos.find((todo) => todo.id == props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditTodo: (id, todo) => dispatch(startEditTodo(id, todo)),

})
export default connect(mapStateToProps, mapDispatchToProps)(EditTodoPage);