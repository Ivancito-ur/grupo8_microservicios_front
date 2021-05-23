import React, { Component } from "react";
import RolesRest from "../Api/RolesRest";

class FormularioComponent extends Component {
  nombreRef = React.createRef();
  descripcionRef = React.createRef();
  idRef = React.createRef();

  state = {
    usuario: {},
    status: null,
  };

  changeState = () => {
    this.setState({
      usuario: {
        //nombre: this.nombreRef.current.value,
        descripcion: this.descripcionRef.current.value,
        nombre: this.nombreRef.current.value,
        permiso: { id: this.idRef.current.value },
        // ultimoAcceso: moment(new Date()).format('YYYY-MM-DD')
      },
    });

    console.log(this.state);
  };

  saveUsuario = (e) => {
    e.preventDefault();

    this.changeState();
    // console.log(this.nombreRef.current.value);
    // console.log(this.documentoRef.current.value);
    // console.log(this.nicknameRef.current.value);
    // console.log(this.contraseñaRef.current.value);

    // Hacer una petición http por post para guardar al usuario
    console.log(this.state.usuario);
    RolesRest.addRol(this.state.usuario).then();
  };

  render() {
    return (
      <div>
        <h1>Nuevos datos</h1>
        <form onSubmit={this.saveUsuario}>
          <div className="form-group">
            <label htmlFor="">nombre</label>
            <input
              // onChange={this.handleClick}
              className="form-control"
              type="text"
              name="nombre"
              id=""
              // value={this.state.nombre}
              placeholder="name"
              ref={this.nombreRef}
              onChange={this.changeState}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">descripcion</label>
            <input
              // onChange={this.handleClick}
              className="form-control"
              type="text"
              name="descripcion"
              id=""
              // value={this.state.descripcion}
              placeholder="descripcion"
              ref={this.descripcionRef}
              onChange={this.changeState}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">id</label>
            <input
              // onChange={this.handleClick}
              className="form-control"
              type="text"
              name="id"
              id=""
              // value={this.state.descripcion}
              placeholder="id"
              ref={this.idRef}
              onChange={this.changeState}
            />
          </div>
          <button onClick={this.onClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}
export default FormularioComponent;
