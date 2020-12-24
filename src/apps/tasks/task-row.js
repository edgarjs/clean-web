import React, { useState } from 'react'

export default function TasksRow ({ task, onCompleteToggle }) {
  const [completed, setCompleted] = useState(!!task.completed)
  const toggleCompleted = () => {
    const newValue = !completed
    setCompleted(newValue)
    onCompleteToggle({ ...task, completed: newValue })
  }

  return (
    <li className='list-group-item'>
      <input
        className='form-check-input me-1'
        type='checkbox'
        onChange={toggleCompleted}
        checked={completed}
      /> {completed ? <del className='text-muted'>{task.title}</del> : task.title}
    </li>
  )
}
