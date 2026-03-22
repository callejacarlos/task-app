class TaskCreator {
  create(data) {
    return this.createTask(data);
  }
}

class BugTask extends TaskCreator {
  createTask(data) {
    return {
      ...data,
      type: "BUG",
      priority: "HIGH"
    };
  }
}

class FeatureTask extends TaskCreator {
  createTask(data) {
    return {
      ...data,
      type: "FEATURE",
      priority: "MEDIUM"
    };
  }
}

export function getTaskCreator(type) {
  switch (type) {
    case "BUG":
      return new BugTask();
    case "FEATURE":
      return new FeatureTask();
    default:
      throw new Error("Tipo no válido");
  }
}