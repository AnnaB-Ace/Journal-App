import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import {firebase} from '../firebase/firebase-config'

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from '../routers/PrivateRoute';
import { PublicRoute } from '../routers/PublicRoute';
import { startLoadingNotes } from '../actions/notes';




export const AppRouter = () => {

    
const dispatch= useDispatch()
const [checking, setChecking]=useState(true)
const [isLoggedIn, setisLoggedIn]=useState(false)

useEffect (()=>{
    firebase.auth().onAuthStateChanged( async(user)=>{
        console.log(user)// si no estoy autenticado regresa un null
        if(user?.uid){
            dispatch(login(user.uid, user.displayName))
            setisLoggedIn(true)
            
            dispatch(startLoadingNotes(user.uid))
        }else{
            setisLoggedIn(false)
        }
        setChecking(false)
    })
}, [dispatch])

if (checking){
    return(
        <h1>Espere...</h1>
    )
}
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={isLoggedIn}
                    />

                    <PrivateRoute 
                        exact
                        path="/"
                        component={ JournalScreen }
                        isAuthenticated={isLoggedIn}
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
