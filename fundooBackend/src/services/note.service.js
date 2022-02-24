import Note from '../models/note.model';

//add a note
export const addNoteService = async (body) =>{
    const data = await Note.create(body);
    return data;
}

//get all notes
export const getAllNotesService = async () =>{
    const data =  await Note.find();
    return data;
}

//update a note
export const updateNoteService = async (body) =>{
   const _id= body.noteId;
   let bodydata= {
       "title": body.title,
       "description": body.description
   }
   const data = await Note.findByIdAndUpdate(
       {
           _id
       },
       bodydata,
       {
        new: true
       }
   );
   return data;
}

//get single note
export const getNoteService = async (id) =>{
    const data = await Note.findById(id);
    console.log("response data", data,id )
    return data
}

//trash single note
export const trashNoteService = async (body) =>{
    const _id = body.noteId;
    const bodydata = {
        idDeleted : body.isDeleted
    }
    const data = await Note.findByIdAndUpdate(
        {
            _id
        },
        bodydata,
        {
         new: true
        }
    );
    return data
}

//delete single note
export const deleteNoteService = async (body) =>{
    const data = await Note.findByIdAndDelete(body.noteId);
    return data
}



