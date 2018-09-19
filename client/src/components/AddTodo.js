
import React from 'react';

import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { pushTodos } from '../redux/actions/actions-todos'
import SideNave from './SideNave'
import Header from './Header'
import { Link } from 'react-router-dom'
import { postTodo } from '../redux/actions/actions-todos'
// import ShowTodo from './showTodo'

class AddTodo extends React.Component {

    state = {
        title: '',
        place: '',
        description: '',
     
    }

    onchange = (event) => {

        event.preventDefault();

        this.setState({ [event.target.name]: event.target.value })



    }
    addTodoFn = (event) => {

        event.preventDefault();


        this.props.postTodo(this.state)

        this.setState({ title: '', description: '', place: '' })

    }




    render() {

        return (
            <React.Fragment>
                <SideNave />


                <main id="to-do_main">
                    <div className="row">
                        <div className="container">
                            <div className="col s12">
                                <h5 className="white-text center-align">Add New Thing</h5>
                                <Link to="/" className="backButton">

                                    <FontAwesomeIcon icon="long-arrow-alt-left" className="text-sky-blue fs-32" size="2x" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{ marginBottom: "50px" }}>
                        <div className="container">
                            <div className="col s12 center-align">
                                <FontAwesomeIcon icon="clock" className="text-sky-blue fs-32" size="2x" />

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="container">
                            <div className="input-field col s12">
                                <FontAwesomeIcon icon="clipboard-list" className="prefix" size="2x" />

                                <input type="text" id="title" value={this.state.title} onChange={this.onchange} name="title" className="validate" />
                                <label htmlFor="title" className="white-text">Title</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="container">
                            <div className="input-field col s12">
                                <FontAwesomeIcon icon="map-marker-alt" className="prefix" size="2x" />
                                <input type="text" id="place" value={this.state.place} onChange={this.onchange} name="place" className="validate" />
                                <label htmlFor="place" className="white-text">Place</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="container">
                            <div className="input-field col s12">
                                <FontAwesomeIcon icon="file-alt" className="prefix" size="2x" />
                                <input type="text" id="description" value={this.state.description} onChange={this.onchange} name="description" className="validate" />
                                <label htmlFor="description" className="white-text">Description</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="container">
                            <div className="col s12">
                                <button onClick={this.addTodoFn} className="btn waves-effect waves-lighten hoverable sky-blue" style={{ width: '100%' }}>add
                        your thing</button>
                            </div>
                        </div>
                    </div>
                </main>

            </React.Fragment>
        )
    }

}

const getTodoList = (state) => {
    console.log('redux-state', state)
    return {
        todo: state
    }
}

export default connect(getTodoList, { postTodo })(AddTodo);

