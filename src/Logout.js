import React from 'react';
import {BrowserRouter as Router, Link } from 'react-router-dom';

function Logout(props) {
    return (
        <Router>
            <Link to = "/Login">
                <button onClick = {() => {props.setIsLoggedIn(false)}}> 
                    Logout 
                </button>
            </Link>
        </Router>
    )
};

export default Logout;