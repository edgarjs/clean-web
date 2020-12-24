export default function TasksRepo (storage) {
  return {
    all () {
      return storage.getItem('tasks') || []
    },

    create (values) {
      const id = new Date().getTime()
      const newTask = { id, ...values }
      const tasks = [...this.all(), newTask]
      storage.putItem('tasks', tasks)
      return newTask
    },

    update (id, values) {
      const allTasks = this.all()
      const i = allTasks.map(t => t.id).indexOf(id)
      if (i < 0) return

      const tasks = [
        ...allTasks.slice(0, i),
        values,
        ...allTasks.slice(i + 1)
      ]
      storage.putItem('tasks', tasks)
      return values
    }
  }
}
