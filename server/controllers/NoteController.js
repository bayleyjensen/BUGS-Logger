import express from "express";
import noteService from "../services/NoteService";

export default class NoteController {
  constructor() {
    this.router = express
      .Router()
      .get("/:id", this.getNotesById)
      .post("", this.createNote)
      .delete("/:id", this.deleteNote);
  }
  async getNotesById(req, res, next){
    try{
      let data = await noteService.getNotesById(req.params.id)
      return res.send(data)
    }catch(error){
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await bugService.createNote(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await bugService.deleteNote(req.params.id);
      return res.send("Successfully Deleted");
    } catch (error) {
      next(error);
    }
  }
}
