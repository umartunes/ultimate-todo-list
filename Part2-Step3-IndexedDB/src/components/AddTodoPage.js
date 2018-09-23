import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { pushTodos } from '../redux/actions/actions-todos';
import TodoForm from './TodoForm';
import SideNave from './SideNave';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'




export class AddTodoPage extends React.Component {

    onSubmit = (todo) => {
        this.props.pushTodos(todo);
        this.props.history.push('/');
    };

    render() {
        return (
            <Fragment>
                <main id="to-do_main">
                    <SideNave />
                    <div className="row">
                        <div className="container">
                            <div className="col s12" >
                                <h5 className="white-text center-align">Add New Todo</h5>
                                <Link to="/" className="backButton white-text">
                                <FontAwesomeIcon icon="long-arrow-alt-left" className=" fs-32 white-text" size="2x" />
                            </Link>
                            </div>
                        </div>
                    </div>
                    <TodoForm
                        onSubmit={this.onSubmit}
                    />
                </main>
            </Fragment>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    pushTodos: (todo) => dispatch(pushTodos(todo))
});

export default connect(undefined, mapDispatchToProps)(AddTodoPage);