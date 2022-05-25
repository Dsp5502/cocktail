import React from 'react'

const Cards = () => {
    return (
        <div className='card'>
            <div>
                <img src="" alt="imagen de cocktel" className="cardImg" />
            </div>

            <div className='BottomCardInfo'>
                <button className="cardButton">agregar</button>
                <button className="cardButton">eliminar</button>
            </div>
        </div>
    )
}

export default Cards