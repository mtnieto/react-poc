import React from 'react';
import './header.css'

export default class Header extends React.Component {
    render() {
        return ( 
            < nav className = "navbar navbar-expand-lg navbar-color pb-3 pt-3 navbar-dark " >
            <a className="navbar-brand" href="#">Navbar</a>
            </nav>
        );
    }
}