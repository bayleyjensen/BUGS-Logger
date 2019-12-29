import mongoose from "mongoose";
import Note from "../models/Note";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Note", Note);

class NoteService {
  async getNotesByBugId(BugId) {
    let data = await _repository.find({ bug: BugId });
    return data;
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }

  async editNoteByBugId(BugId, update) {
    let data = await _repository.findByIdAndUpdate(BugId, update, {
      new: true
    });
    if (!data) {
      throw new ApiError("Not a good ID", 400);
    }
    return data;
  }

  async delete(id) {
    let data = await _repository.findByIdAndDelete(id);
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
}

const noteService = new NoteService();
export default noteService;
