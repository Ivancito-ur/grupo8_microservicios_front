import axios from 'axios';
import { API_URL } from '../constants.js'

export const URL_PETICION_ROL = '/rol'

class RolesRest {

    listarRoles() {

        return axios.get(API_URL + URL_PETICION_ROL).then(res => {
            console.log(res);
        });

    }
    deleteRol(id) {
        return axios.delete(API_URL + URL_PETICION_ROL + id);
    }

    getRol(id) {
        return axios.get(API_URL + URL_PETICION_ROL + id);
    }

    updateRol() {
        return axios.put(API_URL + URL_PETICION_ROL);
    }
    addRol() {
        return axios.post(API_URL + URL_PETICION_ROL);
    }



}

export default new RolesRest;