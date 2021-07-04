import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

// si yo cambio de nota, vemos que en el store cambia, pero en la vista no, esto sucede porque el use form maneja su propia estado en el hook useFomr
// lo cambiamos con un useEffect
// esta accion se debe ejecutar solo si el id de la nota es diferente
// useRef sirvepara almacenar una variable mutable que no redibuja todo el componente si cambia para mutar
//activeId.current : obtener el valor actual

export const NoteScreen = () => {
    const dispatch=useDispatch();
    const {active:note }=useSelector(state=>state.notes)
const[formValues, handleInputChange, reset]=useForm(note);
const {body, title}= formValues;

const activeId=useRef(note.id)
useEffect(()=>{
    if(note.id !== activeId.current){
        reset(note);
        activeId.current=note.id
    }
}, [note, reset])

useEffect(()=>{ // dispath para actualizar la nota activa
    dispatch(activeNote(formValues.id, {...formValues}))
    //{desestructuro para mandar un nuevo objeto del form values} 
},[formValues, dispatch])
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    name='title'
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    value={body}
                    name='body'
                    onChange={handleInputChange}
                ></textarea>

                <div className="notes__image">
                    <img 
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                        alt="imagen"
                    />
                </div>


            </div>

        </div>
    )
}
