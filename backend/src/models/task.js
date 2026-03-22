import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: String,
  priority: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Task", taskSchema);