import React, { Component } from 'react'
import RolesRest from '../Api/RolesRest';

class RolesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contenido: [

            ]
            // ,
            // id: null,
            // nombre: "",
            // descripcion: "",
            // permiso: {
            //     id:null,
            //     nombre:"",
            //     autorizacion:false
            // }
        }

        this.refreshRol = this.refreshRol.bind(this);

    }

    componentDidMount() {
        this.refreshRol();
    }


    refreshRol() {
        RolesRest.listarRoles().then(response => {
            console.log(response)
            this.setState({
                contenido: response.data
            });
        });
    }

    render() {
        return (
            <div className="rolesComponent">

                <div className="container">

                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Roles </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Se puede visualizar los roles del sistema</strong> <code>Estos son</code>, como si fueran los perfiles 
      </div>
                            </div>
                        </div>


                    </div>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Descripcion</th>
                                <th scope="col">ID Permiso</th>
                                <th scope="col">Nombre Permiso</th>
                                <th scope="col">¿Activo permiso?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.contenido.map(aux =>
                                <tr key={aux.id}>
                                    <td>{aux.id} </td>
                                    <td>{aux.nombre} </td>
                                    <td>{aux.descripcion} </td>
                                    <td>{aux.permiso.id} </td>
                                    <td>{aux.permiso.nombre} </td>
                                    <td>{ aux.permiso.autorizacion.toString()} </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default RolesComponent;