class TaskBuilder {
  constructor() {
    this.task = {};
  }

  setTitle(title) {
    this.task.title = title;
    return this;
  }

  setDescription(desc) {
    this.task.description = desc;
    return this;
  }

  setType(type) {
    this.task.type = type;
    return this;
  }

  setPriority(priority) {
    this.task.priority = priority;
    return this;
  }

  setDueDate(date) {
    this.task.dueDate = date;
    return this;
  }

  addTag(tag) {
    if (!this.task.tags) this.task.tags = [];
    this.task.tags.push(tag);
    return this;
  }

  build() {
    if (!this.task.title) {
      throw new Error("La tarea necesita título");
    }
    return this.task;
  }
}

export default TaskBuilder;