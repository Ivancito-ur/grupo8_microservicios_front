import React, { Component } from 'react'
import axios from 'axios'
import { API_URL } from '../constants.js'
import UsuarioRest from '../Api/UsuarioRest.js';
import moment from 'moment';
export const URL_PETICION_USUARIO = '/usuario'

class RegistroComponent extends Component{

    

    nombreRef = React.createRef();
    documentoRef = React.createRef();
    nicknameRef = React.createRef();
    contraseñaRef = React.createRef();

    state={
        usuario: {},
        status: null
    };

    changeState =() =>{
        this.setState({
            usuario:{
                //nombre: this.nombreRef.current.value,
                persona:{documento: this.documentoRef.current.value},
                nickname: this.nicknameRef.current.value,
                contraseña: this.contraseñaRef.current.value,
                ultimoAcceso: moment(new Date()).format('YYYY-MM-DD')
            }
        });

        console.log(this.state)
    }

    saveUsuario = (e) =>{
        e.preventDefault();

        this.changeState();
        // console.log(this.nombreRef.current.value);
        // console.log(this.documentoRef.current.value);
        // console.log(this.nicknameRef.current.value);
        // console.log(this.contraseñaRef.current.value);

        // Hacer una petición http por post para guardar al usuario
        console.log(this.state.usuario);
        UsuarioRest.addUsuario(this.state.usuario)
    }

    render(){
        return(
            <div className="RegistroComponent">
                <form  className="m-5 formulario" action="" onSubmit={this.saveUsuario}>
                    <div className="container w-25 p-1 py-5">
                    <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label formuRegistro">Nombre</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control input" id="inputPassword"  required="Debes introducir un nombre" ref= {this.nombreRef} onChange={this.changeState}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label  formuRegistro">Documento</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control input" id="inputPassword" required ref= {this.documentoRef} onChange={this.changeState}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label formuRegistro">Nickname</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control input" id="inputPassword" required ref= {this.nicknameRef} onChange={this.changeState}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label formuRegistro">Contraseña</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control input" id="inputPassword" required ref= {this.contraseñaRef} onChange={this.changeState}/>
                    </div>
                </div>
                <div className="botones">
                    <button type="submit" className="btn btn-primary">Registrar</button>
                    <button type="reset" className="btn btn-primary ">Limpiar</button>
                </div>
                
                
                </div>

                </form>
                
            </div>
        );
    }
}

export default RegistroComponent;