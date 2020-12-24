import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import App from '../../app'
import Page from './page'

const app = App()
const accessToken = app.services.persistence.authRepo.accessToken()

if (!accessToken) {
  window.location.href = '/authentication.html'
  return
}

ReactDOM.render(<Page app={app} />, document.getElementById('app'))
