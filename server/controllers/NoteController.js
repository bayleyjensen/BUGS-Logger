import express from "express";
import noteService from "../services/NoteService";

export default class NoteController {
  constructor() {
    this.router = express
      .Router()
      .post("", this.createNote)
      .delete("/:id", this.deleteNote);
  }

  async createNote(req, res, next) {
    try {
      let data = await noteService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async deleteNote(req, res, next) {
    try {
      await noteService.delete(req.params.id);
      return res.send("Successfully Deleted");
    } catch (error) {
      next(error);
    }
  }
}
