import React from 'react';
import SideNave from './SideNave';
import Header from './Header';
import Section from './Section';

class Dashoard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SideNave />
                <Header />
                <Section />
            </React.Fragment>


        )
    }
}
export default Dashoard



