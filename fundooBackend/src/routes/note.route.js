import express from 'express';
import * as noteController from '../controllers/note.controller'

const router = express.Router();

//route to add new note
router.post('/addnote', noteController.addNote );

//route to get all notes
router.get('/getAllNotes', noteController.getAllNotes);

//route to update a note
router.put('/updateNote', noteController.updateNotes);

//route to get a note
router.get('/getNote/:_id',noteController.getNote);

//router to trash a note
router.put('/trashNote', noteController.trashNote)

//router to delete a note
router.delete('/deleteNote', noteController.deleteNote)

export default router;