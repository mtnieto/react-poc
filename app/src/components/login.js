import React from 'react';


export default class Login extends React.Component {
    render() {
        return ( 
            <div className="col-12 pt-10 mt-3">
           < div className = "col-4 ml-10 offset-md-4  jumbotron">
            <h1>Login</h1>
                <div className="form-group">
                <label for="email">Email address:</label>
                <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                <label for="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd" />
                </div>
                <div className="checkbox">
                <label><input type="checkbox" value="remember" />Remember me</label>
                </div>
                <button class="btn btn-primary" type="submit">Submit</button>
                </div>
            </div>
        );
    }
}