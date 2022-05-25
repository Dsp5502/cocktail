import React from 'react';

const Cards = ({ infoCocktel }) => {
  console.log(infoCocktel);
  /*{coctail.map((coctail) => (
        <div key={coctail.idDrink}>
          <h1>{coctail.strDrink}</h1>
          <img src={coctail.strDrinkThumb} alt={coctail.strDrink} />
          <p>{coctail.strInstructions}</p>
        </div>
      ))}*/

  return (
    <div className='Cards'>
      {infoCocktel?.drinks?.map((coctail) => (
        <div key={coctail.idDrink}>
          <div className='card'>
            <div>
              <img
                src={coctail.strDrinkThumb}
                alt='imagen de cocktel'
                className='cardImg'
              />
              <h3>Ingredientes:</h3>
              <h4>{coctail.strIngredient1}</h4>
              <h4>{coctail.strIngredient2}</h4>
              <h4>{coctail.strIngredient3}</h4>
              <h4>{coctail.strIngredient4}</h4>
              <h4>{coctail.strIngredient5}</h4>
              <h4>{coctail.strIngredient6}</h4>
              <h4>{coctail.strIngredient7}</h4>
              <h4>{coctail.strIngredient8}</h4>
              <h4>{coctail.strIngredient9}</h4>
              <h4>{coctail.strIngredient10}</h4>
              <h4>{coctail.strIngredient11}</h4>
              <h4>{coctail.strIngredient12}</h4>
              <h4>{coctail.strIngredient13}</h4>
              <h4>{coctail.strIngredient14}</h4>
              <h4>{coctail.strIngredient15}</h4>
              <hr />
              <h5>Instrucciones:</h5>
              <h5> {coctail.strInstructions}</h5>
            </div>

            <div className='BottomCardInfo'>
              <button className='cardButton'>agregar</button>
              <button className='cardButton'>eliminar</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
