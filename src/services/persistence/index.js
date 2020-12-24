import storage from './storage'
import TasksRepo from './tasks-repo'
import AuthRepo from './auth-repo'

export default function Persistence () {
  return {
    authRepo: AuthRepo(storage),
    tasksRepo: TasksRepo(storage)
  }
}
