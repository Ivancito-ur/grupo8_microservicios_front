import React, { Component } from "react";

class FormularioComponent extends Component {
  state = {
    nickname: "",
    Descripcion: "",
  };
  // const valor="";
  handleChange = (e) => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value,
    // });
    this.setState({
      // nickname: e.target.value,
      [e.target.name]: e.target.value,
    });
  };
  handleClick = (e) => {
    console.log("holi xd soy el boton");
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submit");
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>Nuevos datos</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-grup">
            <label htmlFor="">Nickname</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="nickname"
              id=""
              value={this.state.nickname}
              placeholder="tu nickname"
            />
          </div>
          <div className="form-grup">
            <label htmlFor="">Descripcion</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="Descripcion"
              id=""
              value={this.state.Descripcion}
              placeholder="descripcion"
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}
export default FormularioComponent;
