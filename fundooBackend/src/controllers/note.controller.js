import HttpStatus from 'http-status-codes';
import * as noteService from '../services/note.service'


/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const addNote = async (req, res, next) => {
    try {
      const data = await noteService.addNoteService(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Note added successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
 * Controller to get all notes
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const getAllNotes = async (req, res, next) => {
    try {
      const data = await noteService.getAllNotesService();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All notes fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };

 /**
 * Controller to update a note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
  export const updateNotes = async (req, res, next) => {
    try {
      const data = await noteService.updateNoteService(req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Note updated successfully'
      });
    } catch (error) {
      next(error);
    }
  };

/**
 * Controller to get a single note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const getNote = async (req, res, next) => {
     console.log("param id",req);
    try {
      const data = await noteService.getNoteService(req.query._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };

    /**
 * Controller to trash a note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const trashNote = async (req, res, next) => {
  try {
    const data = await noteService.trashNoteService(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Note trashed successfully'
    });
  } catch (error) {
    next(error);
  }
 };

  /**
 * Controller to delete a note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const deleteNote = async (req, res, next) => {
 try {
   const data = await noteService.deleteNoteService(req.body);
   res.status(HttpStatus.OK).json({
     code: HttpStatus.OK,
     data: data,
     message: 'Note deleted successfully'
   });
 } catch (error) {
   next(error);
 }
};