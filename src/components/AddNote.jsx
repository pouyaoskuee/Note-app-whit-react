import {useState} from "react";

function AddNote() {

    const handleAddNote = (e) => {
        e.preventDefault();
        const newNote = {
            title,
            description,
            id: new Date().getTime(),
            completed: false,
            created: new Date().toISOString()
        }
        setTitle('')
        setDescription('')
        console.log(newNote);
    }

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')



    return (
        <div className="addNote">
            <h2>add new note</h2>
            <form className='addNote__form' onSubmit={handleAddNote}>
                <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Add note title..." />
                <input type="text"  value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Add note description..." />
                <button type="submit">Add new note</button>
            </form>
        </div>
    )
}


export default AddNote;