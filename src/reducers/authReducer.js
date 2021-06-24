
//ejemplo de reducer de la autenticación
// el state va a estar vacio cuando no este autenticado
// cuando esta autenticado { uid:jadriefbvhrp, name:'Fernando'}
import {types} from '../types/types'
export const authReducer=(state={}, action)=>{
    switch (action.type) {// conveniente un switch para las action
        case types.login:
            return{
             uid:action.payload.uid,
             name:action.payload.displayName
            }
        case types.logout:
            return{}
            
    
        default:
            return state;
    }
}



//pasos:
//primero creamos el funcion reducer, estas funciones tienen un state, y si queremos modificar mi state unamos una action
//Ya tengo mi reducer, ahora creamos mi fuente unica de informacion: el store