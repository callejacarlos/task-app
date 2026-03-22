class TaskPrototype {
  constructor(task) {
    this.task = task;
  }

  clone() {
    return {
      title: this.task.title + " (Copia)",
      description: this.task.description,
      type: this.task.type,
      priority: this.task.priority,
      createdAt: new Date()
    };
  }
}

export default TaskPrototype;