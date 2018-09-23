
import React from 'react';

import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SideNave from './SideNave'

import { Link } from 'react-router-dom'
import { postTodo } from '../redux/actions/actions-todos'
// import ShowTodo from './showTodo'

class AddTodo extends React.Component {

    state = {
        title: '',
        place: '',
        description: '',
        errors: {
            title: '',
            place: '',
            description: ''
        },
    }
    handleValidation() {
        let fields = this.state;
        let errors = {};
        let formIsValid = true;


        if (!fields["title"]) {
            formIsValid = false;
            errors["title"] = "Please Add Title of Task";
        }



        if (!fields["place"]) {
            formIsValid = false;
            errors["place"] = "Please Add Place Detail";
        }




        if (!fields["description"]) {
            formIsValid = false;
            errors["description"] = "Please Add Description of Task";
        }



        this.setState({ errors: errors });
        return formIsValid;
    }

    onchange = (event) => {

        event.preventDefault();

        this.setState({ [event.target.name]: event.target.value })
        this.state.errors[event.target.name] = '';



    }
    addTodoFn = (event) => {

        event.preventDefault();
        if (this.handleValidation()) {

            this.props.postTodo(this.state)

            this.setState({ title: '', description: '', place: '' })

        }
        else {
            window.notify("Error is Occured")
        }
    }




    render() {

        return (
            <React.Fragment>
                <SideNave />


                <main id="to-do_main">
                    <div className="row">
                        <div className="container">
                            <div className="col s12">
                                <h5 className="white-text center-align">Add New Todo</h5>
                                <Link to="/" className="backButton">

                                    <FontAwesomeIcon icon="long-arrow-alt-left" className="white-text fs-32" size="2x" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="container">
                            <div className="col s12 center-align">
                                <FontAwesomeIcon icon="clock" className="white-text fs-32" size="2x" />

                            </div>
                        </div>
                    </div> */}

                    <div className="row">
                        <div className="container">
                            <div className="input-field col s12">
                                <FontAwesomeIcon icon="clipboard-list" className=" white-text prefix" size="2x" />

                                <input type="text" id="title" value={this.state.title} onChange={this.onchange} name="title" className="validate white-text" />
                                <label htmlFor="title" className={this.state.title ? "active white-text" : "white-text"}>Title</label>
                                <span className="error-Style" >{this.state.errors["title"]}</span>

                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="container">
                            <div className="input-field col s12">
                                <FontAwesomeIcon icon="map-marker-alt" className="  white-text prefix" size="2x" />
                                <input type="text" id="place" value={this.state.place} onChange={this.onchange} name="place" className="validate white-text" />
                                <label htmlFor="place" className={this.state.place ? "active white-text" : "white-text"} >Place</label>
                                <span className="error-Style" >{this.state.errors["place"]}</span>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="container">
                            <div className="input-field col s12">
                                <FontAwesomeIcon icon="file-alt" className=" white-text prefix" size="2x" />
                                <input type="text" id="description" multiple value={this.state.description} onChange={this.onchange} name="description" className="validate white-text" />
                                <label htmlFor="description" className={this.state.description ? "active white-text" : "white-text"} >Description</label>
                                <span className="error-Style" >{this.state.errors["description"]}</span>
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

    return {
        todo: state
    }
}

export default connect(getTodoList, { postTodo })(AddTodo);

