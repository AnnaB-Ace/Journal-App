import React from 'react';
import { Link } from 'react-router-dom';
import {useForm} from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';

export const RegisterScreen = () => {
    const dispatch = useDispatch();

//useSelector: dispara un callback con el cual puedo obtener mi state
    // const state= useSelector(state=>state);
    // console.log(state)
    const {msgError}= useSelector(state=>state.ui);
    console.log(msgError)


    const [ formValues, handleInputChange] = useForm( {
     name: 'Hernando',
     email: 'nando@gmail.com',
     password: '123456',
     password2: '78910',
 });
const {name,email,password,password2}=formValues


const handleRegistrer=(e)=>{
    e.preventDefault();
    if(isFormValid()){
        console.log('formulario correcto')
    }
}
    

const isFormValid=()=>{
    if (name.trim().length===0) {
        dispatch(setError('name is required'))
        // console.log('name is required')
        return false
        
    }else if(!validator.isEmail(email)){
        dispatch(setError('Email is not valid'))
        return false
    }else if (password!==password2||password.length<5){
        dispatch(setError('Password should be at least 6 characteres and match each other'))
        return false
    }
    dispatch(removeError())
    return true;
}


        return(
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegistrer}>
                {msgError&&<div className="auth__alert-error">{msgError}</div>}
                

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    onChange={handleInputChange}
                    value={password2}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}