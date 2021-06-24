
import {types} from '../types/types'
import {firebase, googleAuthProvider} from '../firebase/firebase-config'


export const startLoginEmailPassword=(email, password)=>{
    return (dispatch)=>{
            setTimeout(() => {
                dispatch(login(123,'Pedro'))
            }, 3500);
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

// .then(userCred=>{
//             console.log(userCred)
//         })


//https://www.getonbrd.com/empleos/programacion/desarrollador-web-buk-santiago