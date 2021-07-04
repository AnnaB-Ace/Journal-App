import { db } from "../firebase/firebase-config"


export const loadNotes= async (uid)=>{// funcion que regresa las notas
    const notesSnap=await db.collection(`${uid}/journal/notes`).get();
    const notes=[];
    
    notesSnap.forEach(snapHijo=>{
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
      console.log(notes)
    })
 
    return notes
    //.get es para obtener algo de ese documento
}