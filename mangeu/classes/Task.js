class Task {
    constructor(description) {
        this.id = Math.floor(Math.random() * 1001);
        this.description = description;
        this.completed = false;
    }
}
/* if there is only one "object in the module you need to sude default" */
export default Task
// export {Task, num}