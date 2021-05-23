import axios from 'axios';
import { API_URL } from '../constants.js'

export const URL_PETICION_USUARIO = '/usuario'

class UsuarioRest {

    listarRoles() {

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
        return axios.post(API_URL + URL_PETICION_USUARIO, usuario);
    }



}

export default new UsuarioRest;