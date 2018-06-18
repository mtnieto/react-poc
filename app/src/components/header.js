import React from 'react';
import './header.css'
export default class Header extends React.Component {
    render() {
        return ( 
            < nav class = "navbar navbar-expand-lg navbar-color pb-3 pt-3 navbar-dark " >
            <a class="navbar-brand" href="#">Navbar</a>
            </nav>
        );
    }
}