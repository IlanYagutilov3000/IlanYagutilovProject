import Task from "./Task.js";

class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(description) {
        this.tasks.push(new Task(description));
    }
    deleteTask(id) {
        this.tasks = this.tasks.filter((task) => task.id != id);
    }
    updateTaskDescription(id, newDesc) {
        let indexToUpdate = this.tasks.findIndex((task) => task.id == id);
        this.tasks[indexToUpdate].description = newDesc;
    }
    completeTask(id) {
        let indexToUpdate = this.tasks.findIndex((task) => task.id == id);
        this.tasks[indexToUpdate].completed = true;
    }
}

export default TaskManager;

