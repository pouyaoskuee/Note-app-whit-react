function Notes(){
    return (
        <div className="notes">
            <div className="notes__sort">
                <ul>
                    <li>all <span>3</span></li>
                    <li>com <span>2</span></li>
                    <li>uncom <span>1</span></li>
                </ul>
            </div>
            <div className="notes__carts">
                <div className="notes__cart">
                    <div className='cart__header'>
                        <div className="cart__description">
                            <p>title</p>
                            <p>description</p>
                        </div>
                        <div className="cart__icon">
                            <span>🗑️</span>
                            <input type="checkbox" />
                        </div>
                    </div>
                    <div className='cart__date'>july 12 2025</div>
                </div>
                <div className="notes__cart">
                    <div className='cart__header'>
                        <div className="cart__description">
                            <p>title</p>
                            <p>description</p>
                        </div>
                        <div className="cart__icon">
                            <span>🗑️</span>
                            <input type="checkbox" />
                        </div>
                    </div>
                    <div className='cart__date'>july 12 2025</div>
                </div>
            </div>
        </div>
    )

}


export default Notes