import React from 'react';
import { Component } from 'react';
import '../../css/material-dashboard.css'
import '../../css/demo.css'
import HeaderComponent from './HeaderComponent';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class SidebarComponent extends Component{
    render(){
        
        return(
            
            <div className="sidebarComponent">          
            <HeaderComponent></HeaderComponent>

            <div className="sidebar" data-color="green" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
      <div className="logo"><a href="http://www.creative-tim.com" className="simple-text logo-normal">
            Sinplafut
        </a></div>
      <div className="sidebar-wrapper ps-container ps-theme-default" data-ps-id="d54ac940-769c-c221-75bf-e503d71472e1">
        <ul className="nav">
          <li className="nav-item active  ">
            <a className="nav-link" href="#">
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>

          
          <li className="nav-item ">
            <Link className="nav-link" to="/registro">
              <i className="material-icons">person</i>
              <p>Agregar Persona - Usuario</p>
            </Link>
          </li>
        

          <li className="nav-item ">
            <a className="nav-link" href="#">
              <i className="material-icons">content_paste</i>
              <p>Listar Personas</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">
              <i className="material-icons">vpn_key</i>
              <p>Agregar permisos</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">
              <i className="material-icons">format_list_bulleted</i>
              <p>Listar Permisos</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">
              <i className="material-icons">people</i>
              <p>Agregar Rol</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">
              <i className="material-icons">format_list_bulleted</i>
              <p>Listar Roles</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">
              <i className="material-icons">attractions</i>
              <p>Agregar Funcionalidades</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">
              <i className="material-icons">format_list_bulleted</i>
              <p>Listar Funcionalidades</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">
              <i className="material-icons">language</i>
              <p>RTL Support</p>
            </a>
          </li>
        </ul>
      <div className="ps-scrollbar-x-rail" style={{left: "0px", bottom: "0px"}}><div className="ps-scrollbar-x" tabindex="0" 
      style={{left: "0px", width: "0px"}}></div></div><div className="ps-scrollbar-y-rail" style={{top: "0px", right: "0px"}}><div
       className="ps-scrollbar-y" tabindex="0" style={{top: "0px", height: "0px"}}></div></div></div>
    <div className="sidebar-background"></div></div>
    </div>
        );
    }
}
export default withRouter(SidebarComponent);