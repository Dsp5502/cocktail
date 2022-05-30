import React from 'react';
import { useDispatch } from 'react-redux';
import { addCocktailAsync } from '../../redux/actions/actionCocktails';

const Cards = ({ infoCocktel }) => {
  const dispatch = useDispatch();
  const handleAddOrder = (cocktel) => {
    dispatch(addCocktailAsync(cocktel));
    console.log(cocktel);
  };

  return (
    <div className='cards'>
      {infoCocktel?.drinks?.map((coctail) => (
        <div key={coctail.idDrink} class='card'>
          <div class='card-info'>
            <div class='card-avatar'>
              <img
                className='image-card'
                src={coctail.strDrinkThumb}
                alt='cocktail'
              />
            </div>
            <div class='card-title'>{coctail.strDrink}</div>
            <div class='card-subtitle'>{coctail.strCategory}</div>

            <div class='card-tags'>
              {coctail.strTags === null ? (
                <span className='tags'>All</span>
              ) : (
                coctail.strTags?.split(',').map((tag) => (
                  <span key={tag} className='tags'>
                    {tag}
                  </span>
                ))
              )}
            </div>
          </div>

          <div class='card-footer'>
            <button
              className='btn-card'
              onClick={() => handleAddOrder(coctail)}
              type='button'
            >
              Add to order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
