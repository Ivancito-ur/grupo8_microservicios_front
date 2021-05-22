import React, { Component } from 'react'
import AuthenticateService from '../Autenticacion/AuthenticateService.js'

import "../../src/css/login.css"

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nickname: "",
            password: "",
            falloSesion:false
        }

        this.clickLogin = this.clickLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    render() {
        return (
            <div className="loginComponent">
                {this.state.falloSesion && <div className="alert alert-danger"> No se puedo iniciar </div>}
                    <main className="form-signin">
                        <img className="mb-4" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"></img>
                        <h1 className="h3 mb-3 fw-normal">Inicio de sesion</h1>
                        <div className="form-floating">
                            <input type="text" className="form-control" name="nickname" id="nickname" onChange={this.handleChange}  placeholder="Nickname" autoComplete="off"></input>
                            <label htmlFor="floatingInput">Nickname</label>
                        </div>

                        <div className="form-floating">
                            <input type="password" className="form-control" name="password" id="password" onChange={this.handleChange} placeholder="Contraseña"></input>
                            <label htmlFor="floatingInput">Contraseña</label>
                        </div>
                        <button onClick={this.clickLogin} className="w-100 btn btn-lg btn-primary">Iniciar</button>
                        <p className="mt-5 mb-3 text-muted">&copy; Proyecto de aula 2021</p>
                    </main>            
            </div>
        );
    }

    clickLogin() {
        console.log(this.state.nickname)
        console.log(this.state.password)
        AuthenticateService.executeJwtAuthenticationService(this.state.nickname, this.state.password)
        .then((response) => {
                console.log(response)
                AuthenticateService.registerAuthenticationSuccesJwt(this.state.nickname,response.data.token);
                this.props.history.push("/dashboard");
            }).catch((error) => {
                this.setState({
                    falloSesion: true
                });
                console.log("NO INICIA")
            });
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value //el state y la forma de className tienen que ser ifuales
        });
    }

}

export default LoginComponent;