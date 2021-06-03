import axios from 'axios';
import { API_URL } from '../constants.js'
import swal from 'sweetalert';

export const URL_PETICION_USUARIO = '/usuario'

class UsuarioRest {

    listarUsuario() {
        return axios.get(API_URL + URL_PETICION_USUARIO).then(res => {
            console.log(res);
        });
    }
    deleteRol(id) {
        return axios.delete(API_URL + URL_PETICION_USUARIO + id);
    }

    getRol(id) {
        return axios.get(API_URL + URL_PETICION_USUARIO + id);
    }

    updateUsuario() {
        return axios.put(API_URL + URL_PETICION_USUARIO);
    }
    addUsuario(usuario) {
        console.log(API_URL+URL_PETICION_USUARIO)
        return axios.post(API_URL + URL_PETICION_USUARIO, usuario).then(res =>{
            if(res == !null){
                swal("Usuario Registrado!", "Registro exitoso en Sinplafut", "success");
            }else{
                swal("Usuario no registrado", "Verifica los datos", "error");
            }
            

        });
    }



}

export default new UsuarioRest;