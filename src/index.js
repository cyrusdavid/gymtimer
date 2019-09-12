import React from 'react'
import ReactDOM from 'react-dom'
import 'tailwindcss/base.css'
import './css/styles.css'
import 'tailwindcss/utilities.css'
import App from './components/app'
import * as serviceWorker from './serviceWorker'

const durations = [30, 60, 90, 120, 180]

ReactDOM.render(<App durations={durations}/>, document.querySelector('#root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
