import React from 'react';
import Header from  './header'
import Footer from './footer'
import Login from './login'
import './layout.css'
export default class Layout extends React.Component {
    render() {
        return ( 
            <div>
                <Header />
                <Login />
                <Footer />
            </div>       
        );
    }
}