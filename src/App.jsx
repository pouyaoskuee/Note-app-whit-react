// import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import AddNote from './components/AddNote.jsx'
import Notes from './components/Notes.jsx'
import {useState} from "react";

function App() {
    const [notes, setNotes] = useState([])

    const handelAddNote = (newNote) => {

        setNotes((prevNotes)=>[...prevNotes, newNote])
    }

    function handleDeleteNote(id){
        // const filteredNotes = notes.filter(note => note.id !== id)
        // setNotes(filteredNotes)
        setNotes((filteredNotes) => filteredNotes.filter((n) => n.id !== id));
    }

  return (
      <>
          <Header/>
          <div className="section">
              <AddNote onAddNote={handelAddNote}/>
              <Notes notess={notes} onDelete={handleDeleteNote}/>
          </div>
      </>



  )
}

export default App


//<Notes notess={notes}/> میتونی اینجور معنیش کنی نوتس یه فانکشن هست که نوتسس رو قراره دریافت کنه---حالا نوتسس یدونه ارگمان نوتس رو بهش پاس میده--یعنی خلاصه اینکه نوتس راگمانش نوتسس هست و ارگمان اون نوت هست
//function Notes({notess}) حالا اینور نوتس بالاخره ارگمان رو دریافت کرده است حالا میتونی نوتسس رو توی کدات استفاده کنی
// پس نتیحه میگیرمی نوتسس داخل کامپوننت نوتس همون نوته که توش اری اف ابجکت داره توی کامپوننت اپ