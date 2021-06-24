import {types} from '../types/types'
const initialState={
    loading: false,
    msgError: null
}

export const uiReducer=(state=initialState, action)=>{
    switch (action.type) {
        case types.uiSetError:
            return{
             ...state, 
             msgError: action.payload
            }
        case types.uiRemoveError:
            return{
             ...state, 
             msgError: null
            }
        default:
            return state
    }
}


// si inicializamos una variable en null, significa que esa variable no tiene ningun valor asociado