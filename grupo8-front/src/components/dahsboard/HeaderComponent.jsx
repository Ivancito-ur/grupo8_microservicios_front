import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticateService from '../../Autenticacion/AuthenticateService';

class HeaderComponent extends Component {
    render() {
        return (
            <div className="headerComponent">
                <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div className="container-fluid">
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                            <span className="navbar-toggler-icon icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end">
                        <span className='alert alert-info'>Bienvenido {AuthenticateService.getItem()} </span>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:;">
                                        <i className="material-icons">dashboard</i>
                                        <p className="d-lg-none d-md-block">
                                            Stats      </p>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="dropdown-item" onClick={AuthenticateService.logout} to="/">Log out</Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
export default HeaderComponent