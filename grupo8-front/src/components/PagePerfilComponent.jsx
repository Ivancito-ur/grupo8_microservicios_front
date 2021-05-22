import React, { Component } from "react";
import Imagen from "../images/avatar.png";
import "../../src/css/perfil.css";
import PerfilComponent from "./PerfilComponent";
import FormularioComponent from "./FormularioComponent";

class PagePerfilComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <PerfilComponent
              nickname="daniel"
              Descripcion="hola soy de sistemas"
            ></PerfilComponent>
          </div>
          <div className="col-6">
            <FormularioComponent></FormularioComponent>
          </div>
        </div>
      </div>
    );
  }
}
export default PagePerfilComponent;
