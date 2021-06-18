import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Swal from 'sweetalert2';
import AuthenticateService from '../../Autenticacion/AuthenticateService';

import FooterComponent from '../FooterComponent';
import RegistroComponent from '../RegistroComponent';
import HeaderComponent from './HeaderComponent.jsx';
import SidebarComponent from './SidebarComponent.jsx';

class DashboardComponent extends Component {
    render() {
        const authenticated = AuthenticateService.getAuthenticated();

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Inicio de sesion satisfactorio',
            showConfirmButton: false,
            timer: 1500
        })

        return (
            <div className="dashboardComponent">
                <Router>

                

                <SidebarComponent></SidebarComponent>
                <Switch>
                  <div className="container">

                  
                     
                      <Route path="/registro" exact component={RegistroComponent}/>
                      
                 
                    
                   </div>
                </Switch>

                </Router>
            </div>
        );
    }
}
export default DashboardComponent;