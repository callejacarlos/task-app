import TaskPrototype from "../patterns/Prototype.js";
import Task from "../models/task.js";

export const cloneTask = async (req, res) => {
  try {
    const { id } = req.params;

    const original = await Task.findById(id);

    const prototype = new TaskPrototype(original);
    const newTaskData = prototype.clone();

    const newTask = await Task.create(newTaskData);

    res.json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};