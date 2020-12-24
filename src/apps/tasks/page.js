import React, { useState, useEffect } from 'react'
import TaskForm from './task-form'
import TasksList from './tasks-list'

export default function Page ({ app }) {
  const [tasks, setTasks] = useState([])
  const loadTasks = () => setTasks(app.workflows.loadTasks())
  const createTask = (values) => {
    const newTask = app.workflows.createTask(values)
    loadTasks()
    return newTask
  }
  const updateTask = (task) => {
    app.workflows.updateTask(task)
    loadTasks()
    return task
  }

  useEffect(() => loadTasks(), [])

  return (
    <div className='container py-5'>
      <h2>Tasks list</h2>

      <TaskForm onSubmit={createTask} />
      <TasksList tasks={tasks} onTaskCompleteToggle={updateTask} />
    </div>
  )
}
