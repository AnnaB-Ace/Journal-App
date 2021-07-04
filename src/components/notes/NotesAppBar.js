import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUpLoading } from '../../actions/notes'

export const NotesAppBar = () => {
    const dispatch=useDispatch()
    
    const state= useSelector(state=>state.notes)
    const {active}=state
    const handleSave=()=>{
        dispatch(startSaveNote(active))
        
    }
    // necesito que cuando haga click se seleccione un archivo
    const handlePictureClick=()=>{
        document.querySelector("#fileSelector").click();
    }
    const handleFileChange=(e)=>{
        console.log(e.target.files)
        const file= e.target.files[0];
        if(file){
            dispatch(startUpLoading(file));
        }
    }
    //cuando el input type:"file" cambia disparamos el onChange
    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
            <input id="fileSelector"  name="file" onChange={handleFileChange} type="file" style={{display: 'none'}} />
            
            <div>
                <button className="btn" onClick={handlePictureClick}>
                    Picture
                </button>

                <button className="btn" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}
