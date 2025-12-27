
function AddNote() {
    return (
        <div className="addNote">
            <h1>add new note</h1>
            <form className='addNote__form' action="">
                <input type="text" placeholder="Add note title..." />
                <input type="text" placeholder="Add note description..." />
                <button type="submit">Add new note</button>
            </form>
        </div>
    )
}


export default AddNote;