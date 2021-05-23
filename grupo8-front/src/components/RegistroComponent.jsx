import React, { Component } from 'react'
import axios from 'axios'
import { API_URL } from '../constants.js'
import UsuarioRest from '../Api/UsuarioRest.js';
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
                contraseña: this.contraseñaRef.current.value
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
                <form  className="m-5" action="" onSubmit={this.saveUsuario}>
                    <div className="container w-25 p-1 py-5">
                    <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label ">Nombre</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputPassword" ref= {this.nombreRef} onChange={this.changeState}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label ">Documento</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputPassword" ref= {this.documentoRef} onChange={this.changeState}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label ">Nickname</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputPassword" ref= {this.nicknameRef} onChange={this.changeState}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Contraseña</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" ref= {this.contraseñaRef} onChange={this.changeState}/>
                    </div>
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary m-5">Registrar</button>
                    <button type="" className="btn btn-primary ">Limpiar</button>
                </div>
                
                </div>

                </form>
                
            </div>
        );
    }
}

export default RegistroComponent;