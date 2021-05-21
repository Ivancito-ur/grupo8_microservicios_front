import React, { Component } from 'react'
import AuthenticateService from '../Autenticacion/AuthenticateService';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import MenuComponent from './MenuComponent'

class DashboardComponent extends Component {
    render(){
        const authenticated = AuthenticateService.getAuthenticated();
        return(
            <div className="dashboardComponent">
                <MenuComponent></MenuComponent>

                <div className="container">
                    {authenticated && <span className='alert alert-info'>Bienvenido {AuthenticateService.getItem()} </span>}
                    </div>
            </div>
        );
    }
}
export default DashboardComponent;