
import React from 'react';

import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { pushTodos } from '../redux/actions/actions-todos'
import SideNave from './SideNave'
import Header from './Header'
import { Link } from 'react-router-dom'
// import ShowTodo from './showTodo'

class AddTodo extends React.Component {

    state = {
        title: '',
        location: '',
        description: '',
        status: false
    }

    onchange = (event) => {

        event.preventDefault();

        this.setState({ [event.target.name]: event.target.value })
        console.log("state", this.state)


    }
    addTodoFn = (event) => {

        event.preventDefault();


        this.props.pushTodos(this.state)

        this.setState({ title: '', desc: '', location: '' })

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
                                <input type="text" id="location" value={this.state.location} onChange={this.onchange} name="location" className="validate" />
                                <label htmlFor="location" className="white-text">Location</label>
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

export default connect(getTodoList, { pushTodos })(AddTodo);

