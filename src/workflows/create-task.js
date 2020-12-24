export default function PartialCreateTask ({ persistence }) {
  return function CreateTask (values) {
    return persistence.tasksRepo.create(values)
  }
}
