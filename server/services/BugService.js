import mongoose from "mongoose";
import Bug from "../models/Bug";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    let data = await _repository.findById(id);
    return data;
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
    return data;
  }

  async create(rawData) {
    let data = await _repository.create(rawData);
    return data;
  }

  async edit(id, update) {
    let data = await _repository.findOneAndUpdate(
      { _id: id, closed: false },
      { description: update },
      {
        new: true
      }
    );
    return data;
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }

  async closeBug(id) {
    let data = await _repository.findByIdAndUpdate(id, { closed: true });
    if (!data) {
      throw new ApiError("Invalid ID", 400);
    }
  }
}

const bugService = new BugService();
export default bugService;
