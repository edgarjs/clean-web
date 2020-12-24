import React, { useState } from 'react'

export default function TaskForm ({ onSubmit }) {
  const [title, setTitle] = useState('')
  const handleSubmit = (ev) => {
    ev.preventDefault()
    onSubmit({ title })
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='row align-items-center mb-4'>
        <div className='col-auto'>
          <input
            type='text'
            className='form-control'
            placeholder='New Task'
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            required
          />
        </div>

        <div className='col-auto'>
          <button className='btn btn-primary' type='submit'>
            Add Task
          </button>
        </div>
      </div>
    </form>
  )
}
