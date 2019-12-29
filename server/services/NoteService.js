import mongoose from "mongoose";
import Note from "../models/Note";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Note", Note);

class NoteService {
  
  async getNotesById(id) {
    let data = await _repository.findById(id);
    return data;
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
  async getBugsNotes(BugId){
    let data = await _repository
  }
  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }

  async edit(id, update) {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }

  async delete(id) {
    let data = await _repository.findOneAndUpdate({ _id: id }, { sold: true });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
}

const noteService = new NoteService();
export default noteService;
