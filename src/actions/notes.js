import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config"
import { fileUpLoad } from "../helpers/fileUpLoad";
import { loadNotes } from "../helpers/loadNotes";
import {types} from "../types/types"

export const startNewNote=()=>{
    return async(dispatch, getState)=>{
        //const state=getState();// acceso total a todo mi state, similar al useSlector 
        // const uid=getState().auth.uid
        const {uid}=getState().auth;
      
        const newNote={
            title: '',
            body: '',
            date: new Date().getTime()

       }
       const doc= await db.collection (`${uid}/journal/notes`).add(newNote)
        dispatch (activeNote(doc.id, newNote))
    }
}

export const activeNote=(id, note)=>({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})


export const startLoadingNotes=(uid)=>{
    return async(dispatch)=>{
        const notes= await loadNotes(uid)
        dispatch(setNote(notes))
    }
}
export const setNote=(notes)=>({
    type: types.notesLoad,
    payload: notes
})

// accion para grabar en la base de datos:
export const startSaveNote=(note)=>{
    return async(dispatch, getState)=>{
        const {uid} =getState().auth;

        if(!note.url){
            delete note.url;
        }
        const noteToFirestore={...note};
        //hacemos un clon de la nota para no modificar la otra
        delete noteToFirestore.id;
     
        //eliminamos el id de nuestro objeto porque no lo necesito
         await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
        // console.log(noteToFirestore)
        dispatch(refresNote(note.id, noteToFirestore))
        Swal.fire('Saved', note.title, 'success')
    }
}
// para grabarlo en la base de datos, como es una tarea que resuelve una promesa usamos async
//({}) cuando retorno un objeto
// funcion para actualizar de mi store la nota que cambia
export const refresNote=(id, note)=>({
    type: types.notesUpdated,
    payload: {
        id, 
        note:{
            id,
            ...note
        }
    }
})

export const startUpLoading=(file)=>{
    return async(dispatch, getState)=>{
        const {active: activeNote}= getState().notes;
       
        const fileUrl= await fileUpLoad(file);
        console.log(fileUrl);
    }
}

