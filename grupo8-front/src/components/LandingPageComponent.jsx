import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from '../Autenticacion/AuthenticatedRouter';
import AuthenticateService from '../Autenticacion/AuthenticateService';
import CarruselComponent from './CarruselComponent';
import DashboardComponent from './DashboardComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent'
import LoginComponent from './LoginComponent';
import RolesComponent from './RolesComponent';
import RegistroComponent from './RegistroComponent';


class LandingPageComponent extends Component {
    render() {
        const authenticated = AuthenticateService.getAuthenticated();
        return (
            <div className="LandingPage">
                <Router>
                    <HeaderComponent></HeaderComponent>
                    <Switch>
                        <Route path="/inicio" component={CarruselComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <AuthenticatedRoute path="/dashboard" component={DashboardComponent} />
                        <AuthenticatedRoute path="/roles" component={RolesComponent} />
                        <Route path="/registro" component={RegistroComponent}/>
                    </Switch>
                    <FooterComponent></FooterComponent>
                </Router>
            </div>
        );

    }
}

export default LandingPageComponent;