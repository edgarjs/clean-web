export default function PartialLoadTasks ({ persistence }) {
  return function LoadTasks () {
    return persistence.tasksRepo.all()
  }
}
