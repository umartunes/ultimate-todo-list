import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoForm extends React.Component {

    state = {
        title: this.props.data ? this.props.data.title : '',
        location: this.props.data ? this.props.data.location : '',
        description: this.props.data ? this.props.data.description : '',
        status: false,
        error:''

    };

    changeHandler = (e) => {
        let getValue = e.target.value;
        let getName = e.target.name
        this.setState(() => ({ [getName]: getValue }))
    };

    formHandeler = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.location || !this.state.description) 
        {
           
            window.notify( "Please Fill all the fields" ,"error")
            
        }
        else{
        this.props.onSubmit({
            title: this.state.title,
            location: this.state.location,
            description: this.state.description,
            status: this.state.status
        })

        this.setState(() => (
            {
                title: '',
                location: '',
                description: '',

            })
        )
        }
    }


    render() {
        return (
            <Fragment>
                <form className="form" onSubmit={this.formHandeler} >

                    <div className="row">
                        <div className="container">
                            <div className="input-field col s12">
                                <FontAwesomeIcon icon="clipboard-list" className="prefix white-text" size="2x" />
                                <input type="text" id="title" value={this.state.title} onChange={this.changeHandler} name="title" className="validate white-text" />
                                <label htmlFor="title" className={this.props.data ? "white-text active" : "white-text"}>Title</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="container">
                            <div className="input-field col s12">
                                <FontAwesomeIcon icon="map-marker-alt" className="prefix white-text" size="2x" />
                                <input type="text" id="location" value={this.state.location} onChange={this.changeHandler} name="location" className="validate white-text" />
                                <label htmlFor="location" className={this.props.data ? "white-text active" : "white-text"}>Location</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="container">
                            <div className="input-field col s12">
                                <FontAwesomeIcon icon="file-alt" className="prefix white-text" size="2x" />
                                <input type="text" id="description" value={this.state.description} onChange={this.changeHandler} name="description" className="validate white-text" />
                                <label htmlFor="description" className={this.props.data ? "white-text active" : "white-text"}>Description</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="container">
                            <div className="col s12">
                                <button type='submit' className="btn waves-effect waves-lighten hoverable sky-blue" style={{ width: '100%' }}>
                                    {this.props.data ? 'Update' : 'Add your thing'}
                                </button>
                            </div>
                        </div>
                    </div>

                </form>

            </Fragment>
        );
    }
}

export default TodoForm;