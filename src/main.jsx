import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Counter from './components/Counter.jsx'
import CounterClass from './components/CounterClass.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter/> */}
    <CounterClass/>
  </React.StrictMode>,
)
