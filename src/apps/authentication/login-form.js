import React, { useState } from 'react'

export default function LoginForm ({ onSubmit }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const handleSubmit = (ev) => {
    ev.preventDefault()
    setError(null)

    if (username === 'admin' && password === 'admin') {
      onSubmit({ username, password })
      setUsername('')
      setPassword('')
      return
    }

    setError('Invalid credentials. Try again.')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='row align-items-center'>
        <div className='col-auto'>
          <input
            type='text'
            className='form-control'
            placeholder='admin'
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            required
          />
        </div>

        <div className='col-auto'>
          <input
            type='password'
            className='form-control'
            placeholder='admin'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
        </div>

        <div className='col-auto'>
          <button className='btn btn-primary' type='submit'>
            Login
          </button>
        </div>
      </div>

      {error && <p className='text-danger'>{error}</p>}
    </form>
  )
}
