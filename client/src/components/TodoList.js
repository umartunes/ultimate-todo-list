import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import {removeTodo,setTodos} from '../redux/actions/actions-todos';


class TodoList extends React.Component {
    
    componentDidMount(){
        this.props.setTodos()
    }

    onSubmit = id => {
        this.props.removeTodo(id);
      };
       
    onCheck = (e) => {
         console.log("Check Function",e)
    };



    render() {
       
        const todo = this.props.todos.todos;
        
        return (
            <Fragment>
                
                {
                    todo.length === 0 ? '' :
                        (
                            todo.map((todo, index) =>
                                <TodoListItem data={todo} onRemove={this.onSubmit} onCheck={this.onCheck} key={index} />
                            )
                        )
                }
            
            </Fragment>
        );
    }
};

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps,{removeTodo,setTodos})(TodoList);