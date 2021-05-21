import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from '../Autenticacion/AuthenticatedRouter';
import DashboardComponent from './DashboardComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent'
import LoginComponent from './LoginComponent';
import RolesComponent from './RolesComponent';


class LandingPageComponent extends Component {
    render() {
        return (
            <div className="LandingPage">

                <Router>
                    <HeaderComponent></HeaderComponent>
                    <Switch>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/dashboard" component={DashboardComponent} />
                        <AuthenticatedRoute path="/roles" component={RolesComponent} />
                    </Switch>
                    <FooterComponent></FooterComponent>
                </Router>

                <h3>PROYECTO MICRO SERVICIOS PAGINA LANDING PAGE</h3>

            </div>
        );

    }
}

export default LandingPageComponent;