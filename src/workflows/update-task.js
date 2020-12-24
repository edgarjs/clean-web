export default function PartialUpdateTask ({ persistence }) {
  return function UpdateTask (task) {
    return persistence.tasksRepo.update(task.id, task)
  }
}
