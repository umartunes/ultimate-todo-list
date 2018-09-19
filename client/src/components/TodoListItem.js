import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const TodoListItem = (props) => (

    // <div key={props.index} className="row">
    //     <Link to={`/edit/${props.data.id}`}>
    //         <div className="col s3">{props.data.title}</div>
    //         <div className="col s3">{props.data.location}</div>
    //         <div className="col s3">{props.data.description}</div>
    //     </Link>
    //     <div className="col s2">
    //         <button className="btn" onClick={() => props.onRemove(props.data.id)}>Remove</button>
    //     </div>
    //     <div className="col s1">
    //         <p>
    //             <label>
    //                 <input type="checkbox" className="filled-in" checked={props.data.status} />
    //                 <span></span>
    //             </label>
    //         </p>
    //     </div>
    // </div>
    <div className="row card" style={{ paddingTop: 25, paddingLeft: 10, paddingRight: 0, paddingBottom: 15 }} >
        <div className="col s1">
            <label>
                <input type="checkbox" className="filled-in" />
                <span></span>
            </label>
        </div>
        <Link to={`/edit/${props.data.id}`}>
            <div className="col s10">
                {props.data.title} <br />
                {props.data.title} <br />
                {props.data.title} <br />
            </div>
        </Link>
        {/* <div className="col s1 center-align">
                    <FontAwesomeIcon icon="trash-alt" size="1x" />

                </div> */}
        <div className="col s1 center-align blue-text tex-darken-4">
            <FontAwesomeIcon icon="trash-alt" size="1x" onClick={() => props.onRemove(props.data.id)} style={{ cursor: 'pointer' }} />
        </div>
    </div>

);

export default TodoListItem;