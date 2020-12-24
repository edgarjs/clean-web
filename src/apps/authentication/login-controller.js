import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import App from '../../app'
import Page from './page'

const app = App()

ReactDOM.render(<Page app={app} />, document.getElementById('app'))
