import React, { Component } from "react";
import "../../src/css/perfil.css";
import PerfilComponent from "./PerfilComponent";
import FormularioComponent from "./FormularioComponent";

class PagePerfilComponent extends Component {
  state = {
    form: {
      nickname: "",
      descripcion: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <PerfilComponent
              nickname={this.state.form.nickname}
              descripcion={this.state.form.descripcion}
            ></PerfilComponent>
          </div>
          <div className="col-6">
            <FormularioComponent
              onChange={this.handleChange}
              formValues={this.state.form}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default PagePerfilComponent;
