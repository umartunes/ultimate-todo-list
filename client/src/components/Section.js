import React from 'react'
import { Link } from 'react-router-dom'
import TodoList from './TodoList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Section extends React.Component {
    // state = {
    //     TaskLis: [
    //         {
    //             title: 'Fron End',
    //             location: 'E-Liberary',
    //             description: 'i will complete my Front End Today at E-Liaberary'
    //         },
    //         {
    //             title: 'Back End',
    //             location: 'E-Liberary',
    //             description: 'i will complete my Back End Today at E-Liaberary'
    //         },
    //         {
    //             title: 'Crud',
    //             location: 'E-Liberary',
    //             description: 'i will complete my Crud Operation Today at E-Liaberary'
    //         },

    //     ]
    // }
    render() {
        return (
            <React.Fragment>

                <main style={{ margin: 10 }} >
                <TodoList/>


                </main>

                {/* <!-- Fixed Floating Action Button --> */}
                <div className="fixed-action-btn">
                    <Link to="/create" className="btn-floating btn-large waves-effect waves-light hoverable sky-blue">
                        <FontAwesomeIcon icon="plus" size="1x" />

                    </Link>
                </div>
            </React.Fragment>
        )
    }
}
export default Section
