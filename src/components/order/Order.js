import React, { useState } from 'react'

const Order = () => {
    const [orderCocktails, setOrderCocktails] = useState([]);

  return (
   <>
    <ul>
        <li>
          <img 
            src=""
            alt='imagen de cocktel'
            className='cardImg'
            />
            <h2>{orderCocktails}</h2>   
        </li>
                   
    </ul>
   </>
  )
}

export default Order
