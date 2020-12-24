import React, { useState, useEffect } from 'react'
import LoginForm from './login-form'

export default function Page ({ app }) {
  const login = () => {
    app.services.persistence.authRepo.storeAccessToken('1')
    window.location.href = '/tasks.html'
  }

  return (
    <div className='container py-5'>
      <h2>Login</h2>

      <LoginForm onSubmit={login} />
    </div>
  )
}
