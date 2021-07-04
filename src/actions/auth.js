
import {types} from '../types/types'
import {firebase, googleAuthProvider} from '../firebase/firebase-config'
import { finishLoading, startLoading } from './ui'
import Swal from 'sweetalert2'

export const startLoginEmailPassword=(email, password)=>{
    return (dispatch)=>{

        dispatch(startLoading())
            firebase.auth().signInWithEmailAndPassword(email,password)
            .then( ({user})=>{
               
                dispatch(
                    login(user.uid, user.displayName))
                dispatch(finishLoading())
                })
            .catch(e=>{
                console.log(e)
                 dispatch(finishLoading())
                 Swal.fire('Error', e.message, 'error')
            })
    }
}

export const startRegisterWithEmailPasswordName=(email, password,name)=>{
    return (dispatch)=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then( async ({user})=>{
                await user.updateProfile({displayName: name})
                console.log(user)
                dispatch(
                    login(user.uid, user.displayName))
            })
            .catch(e=>{
                console.log(e)
                 dispatch(finishLoading())
                 Swal.fire('Error', e.message, 'error')
            })
    }
}
// action que dispara otra action
export const startGoogleLogin=()=>{// recibo mi autenticacion de firebase y mando 
    return (dispatch)=>{// mando dispath de uid y display name que recibo de google

        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user})=>{
            dispatch(login(user.uid,user.displayName)
            )
        })
        .catch(err => {
            console.log(err)
        })
    }
}
export const login=(uid,displayName)=>{
    return {
        type: types.login,
        payload:{
            uid,
            displayName
        }
    }
}

export const startLogout=()=>{// recibo mi autenticacion de firebase y mando 
    return async(dispatch)=>{// mando dispath de uid y display name que recibo de google

        await firebase.auth().signOut()
        dispatch(logout())
    }
}
export const logout=()=>{
    return {
        type: types.logout
        
        }
    
}



// .then(userCred=>{
//             console.log(userCred)
//         })


//https://www.getonbrd.com/empleos/programacion/desarrollador-web-buk-santiago