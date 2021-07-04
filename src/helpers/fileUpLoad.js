// // se encarga de subir el archivo: tarea asincrona(async)
// const cors=require('cors')
// export const fileUpLoad= async(file)=>{
//     const cloudUrl="https://api.cloudinary.com/v1_1/dxvwn8nbu";
//     const formData= new FormData();
//     formData.append('upload_preset', 'react-journal')
//     formData.append('file', 'file');// file que recibimos como argumento
//     try{
//         const resp= await fetch (cloudUrl,{
//             method: 'POST',
//             body: formData
//         })
//         if (resp.ok) {
//             const cloudResp= await resp.json();
//             return cloudResp.secure_url;  
//         }else{
//             throw await resp.json();
//         }
//     } catch(err){
//         throw err;
//     }
//     //retunr el url de la imagen
// }

// //formData()

// //peticiones con fecth(peticion a la que voy a llamar,{configuracion del fetch})
// //resp : todo lo que responda cloudinary