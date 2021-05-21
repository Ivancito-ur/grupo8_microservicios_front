import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';
import AuthenticationService from './AuthenticateService.js'

class AuthenticatedRoute extends Component{
    render(){
        if (AuthenticationService.getAuthenticated()) {
            return <Route {...this.props}></Route>
        }
        else{
            return <Redirect to="/login"></Redirect>
        }
    }
}
export default AuthenticatedRoute;