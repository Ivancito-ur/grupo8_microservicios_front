import React, { Component } from "react";
import RolesRest from "../Api/RolesRest";
import Form from "reac-jsonschema-form";

class FormularioComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      descripcion: "",
      // permiso: ''
    };
  }
  handleClick = (event) => {
    this.setState({
      [event.target.name]: event.target.value, //el state y la forma de className tienen que ser
    });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submit");
    console.log(this.state);
  };
  onClick = (e) => {
    let nombre = this.state.nombre;
    let descripcion = this.state.descripcion;
    let roles = {
      nombre,
      descripcion,
    };

    console.log(this.state.nombre);
    RolesRest.addRol(roles).then(console.log("agrego"));
  };
  render() {
    return (
      <div>
        <h1>Nuevos datos</h1>

        <div className="form-grup">
          <label htmlFor="">nombre</label>
          <input
            onChange={this.handleClick}
            className="form-control"
            type="text"
            name="nombre"
            id=""
            value={this.state.nombre}
            placeholder="name"
          />
        </div>
        <div className="form-grup">
          <label htmlFor="">descripcion</label>
          <input
            onChange={this.handleClick}
            className="form-control"
            type="text"
            name="descripcion"
            id=""
            value={this.state.descripcion}
            placeholder="descripcion"
          />
        </div>
        <button onClick={this.onClick} className="btn btn-primary">
          Save
        </button>
      </div>
    );
  }
}
export default FormularioComponent;
