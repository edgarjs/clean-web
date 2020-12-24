import React from 'react'
import TaskRow from './task-row'

export default function TasksList ({ tasks, onTaskCompleteToggle }) {
  return (
    <ul className='list-group'>
      {tasks.map((task) => (
        <TaskRow task={task} onCompleteToggle={onTaskCompleteToggle} key={task.id} />
      ))}
    </ul>
  )
}
