import React from 'react'
import './App.css'
import FormRegistration from '../FormRegistration/FormRegistration'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='container'>
          <h1>Hello! Lets create your account!</h1>
          <FormRegistration />
        </div>
      </header>
    </div>
  )
}

export default App
