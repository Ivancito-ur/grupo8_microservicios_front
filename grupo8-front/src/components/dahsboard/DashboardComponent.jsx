import React, { Component } from 'react'
import Swal from 'sweetalert2';
import AuthenticateService from '../../Autenticacion/AuthenticateService';
import FooterComponent from '../FooterComponent';
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

                <SidebarComponent></SidebarComponent>
                <div className="container">
                </div>
            </div>
        );
    }
}
export default DashboardComponent;