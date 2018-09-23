import React from 'react';

const Model = (props) => {
    return (
        <div id={props.id} className="modal">
            <div className="modal-content">
                <h5>{props.todo.title}</h5>
                <h6>{props.todo.place}</h6>
                <p style={{textAlign:'justify'}}>{props.todo.description}</p>
                {/* <h5>Title <small>{ props.todo.title}</small></h5>
                <h5>Place <small>{props.todo.place}</small></h5>
                <p>{props.todo.description}</p> */}
            </div>
            <div className="modal-footer">
                <button className="modal-close waves-effect waves-green btn btn-flat">Close</button>
            </div>
        </div>
    )
}
export default Model