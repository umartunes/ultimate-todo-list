import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import { removeTodo, setTodos, EditStatus, EditStatusAction } from '../redux/actions/actions-todos';


class TodoList extends React.Component {

    componentDidMount() {
        this.props.setTodos()
    }

    onSubmit = id => {
        this.props.removeTodo(id);
    };

    render() {

        const todo = this.props.todos.todos;
        return (
            <Fragment>
                {

                    todo && todo.length > 0 ? todo.map((todo, index) =>
                        <TodoListItem data={todo} EditStatus={this.props.EditStatusAction} onRemove={this.onSubmit} status={todo.status} key={index} />
                    ) : ''

                }
            </Fragment>
        );
    }
};

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps, { removeTodo, setTodos, EditStatus, EditStatusAction })(TodoList);