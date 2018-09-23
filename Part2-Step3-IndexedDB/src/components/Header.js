import React from 'react';


const Header = () => (
    <React.Fragment>
        <header>
            <h4 className="white-text marginZero" style={{ position: " relative", top: "60%", textIndent: "15px" }}>Ultimate Todo App</h4>
            <h6 id="today" className="white-text" style={{ position: "relative", top: "57%", textIndent: "15px" }}></h6>
        </header>
    </React.Fragment>
)

export default Header;