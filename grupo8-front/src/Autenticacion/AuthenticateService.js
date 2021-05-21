import axios from 'axios';
import {API_URL} from '../constants.js'
export const USER_NAME_SESSION_ATRIBUTE = 'authenticatedUser'
class AuthenticateService {

    executeJwtAuthenticationService(username,password){
        return axios.post(API_URL+'/authenticate', {
            username,
            password
        } )
    }
    createTokenJwt(token){
        return 'Bearer ' + token;
    }

    registerAuthenticationSuccesJwt(username,token){
        console.log(token)
        sessionStorage.setItem(USER_NAME_SESSION_ATRIBUTE,username);
        this.setupAxiosInterceptos(this.createTokenJwt(token));

    }

    logout(){
        console.log(sessionStorage.getItem(USER_NAME_SESSION_ATRIBUTE))
        sessionStorage.removeItem(USER_NAME_SESSION_ATRIBUTE);
    }

    getAuthenticated(){
        let authenticated = sessionStorage.getItem(USER_NAME_SESSION_ATRIBUTE);
        if (authenticated === null) {
            return false;
        }
        return true;
    }
    getItem(){
        return sessionStorage.getItem(USER_NAME_SESSION_ATRIBUTE);
    }

    setupAxiosInterceptos(token){
        axios.interceptors.request.use((config) => {
            if(this.getAuthenticated()){
                config.headers.Authorization  = token;
            }
            //console.log(config)
            return config;
        })

    }

}
export default new AuthenticateService;