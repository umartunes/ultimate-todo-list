import React from 'react';

import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SideNave from './SideNave'
import { Link } from 'react-router-dom'
import { pushTodos } from '../redux/actions/actions-todos'

class AddTodo extends React.Component {

    state = {
        title: '',
        place: '',
        description: '',
    }

    onchange = (event) => {

        event.preventDefault();

        this.setState({ [event.target.name]: event.target.value.trim() })

    }
    
    addTodoFn = (event) => {

        event.preventDefault();

        let { title, description, place } = this.state

        if( title === '' || description === '' || place === '' ){
            window.notify("Please fill in all the fields", 'error')
            return
        }

        let todoItem = {
            _id: Math.random().toString(36).slice(2),
            title: title,
            description: description,
            place: place,
            status: 'pending'
        };
        this.props.dispatch(pushTodos(todoItem))
        this.props.history.push('/')
        this.setState({ title: '', description: '', place: '' })

    }

    render() {

        return (
            <React.Fragment>
                <SideNave />


                <main id="to-do_main">
                    <div className="row relative">
                        <Link to="/" className="backButton white-text">
                            <FontAwesomeIcon icon="long-arrow-alt-left" className="fs-32" size="2x" />
                        </Link>
                        <div className="container">
                            <div className="col s12">
                                <h5 className="white-text center-align">

                                    Add New Todo
                                </h5>

                            </div>
                        </div>
                    </div>

                    <div className="row" style={{ marginBottom: "50px" }}>
                        <div className="container">
                            <div className="col s12 center-align">
                                <FontAwesomeIcon icon="clock" className="white-text fs-32" size="2x" />

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="container">
                            <div className="input-field col s12">
                                <FontAwesomeIcon icon="clipboard-list" className="white-text prefix" size="2x" />

                                <input type="text" id="title" value={this.state.title} onChange={this.onchange} name="title" className="validate white-text" />
                                <label htmlFor="title" className="white-text">Title</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="container">
                            <div className="input-field col s12">
                                <FontAwesomeIcon icon="map-marker-alt" className="white-text prefix" size="2x" />
                                <input type="text" id="place" value={this.state.place} onChange={this.onchange} name="place" className="validate white-text" />
                                <label htmlFor="place" className="white-text">Place</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="container">
                            <div className="input-field col s12">
                                <FontAwesomeIcon icon="file-alt" className="white-text prefix" size="2x" />
                                <input type="text" id="description" value={this.state.description} onChange={this.onchange} name="description" className="validate white-text" />
                                <label htmlFor="description" className="white-text">Description</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="container">
                            <div className="col s12">
                                <button onClick={this.addTodoFn} className="btn waves-effect waves-lighten hoverable sky-blue" style={{ width: '100%' }}>Add Todo</button>
                            </div>
                        </div>
                    </div>
                </main>

            </React.Fragment>
        )
    }

}


export default connect()(AddTodo);

