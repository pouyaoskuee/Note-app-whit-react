// import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import AddNote from './components/AddNote.jsx'
import Notes from './components/Notes.jsx'

function App() {

  return (
      <>
          <Header/>
          <div className="section">
              <AddNote/>
              <Notes/>
          </div>
      </>



  )
}

export default App
