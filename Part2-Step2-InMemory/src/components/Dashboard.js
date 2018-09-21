import React from 'react';
import SideNav from './SideNav';
import Header from './Header';
import Section from './Section';

class Dashoard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SideNav />
                <Header />
                <Section />
            </React.Fragment>


        )
    }
}
export default Dashoard



