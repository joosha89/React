import React from "react";
import { Link, useHistory } from "react-router-dom";

function Navbar() {
    let history = useHistory();

    return (
        <div className="container">
            <Nav.Link><Link to="/React">HOME</Link></Nav.Link>
            <Nav.Link><Link to="/detail">CART</Link></Nav.Link>
        </div>
    )
};

export default Navbar