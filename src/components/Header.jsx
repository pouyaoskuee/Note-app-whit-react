function Header() {
    return (
        <div className="header">
            <h1>Notes App</h1>
            <div className="select">
                <select>
                    <option value={'all'}>all</option>
                    <option value={'completed'}>completed</option>
                    <option value={'Uncompleted'}>Uncompleted</option>
                </select>
            </div>
        </div>
    )
}


export default Header;