import Persistence from './services/persistence'
import LoadTasks from './workflows/load-tasks'
import CreateTask from './workflows/create-task'
import UpdateTask from './workflows/update-task'

export default function App() {
  const services = {
    persistence: Persistence()
  }

  return {
    services,
    workflows: {
      loadTasks: LoadTasks(services),
      createTask: CreateTask(services),
      updateTask: UpdateTask(services)
    }
  }
}
