import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCocktailAsync } from '../../redux/actions/actionCocktails';

const Cards = ({ infoCocktel, setDescriptionCocktail }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddOrder = (cocktel) => {
    dispatch(addCocktailAsync(cocktel));
    console.log(cocktel);
  };
  const description = (coctail) => {
    navigate(`/cocktail/${coctail.strDrink}`);
    setDescriptionCocktail(coctail);
  };

  return (
    <div className='cards'>
      {infoCocktel?.drinks?.map((coctail) => (
        <div key={coctail.idDrink} className='card'>
          <div className='card-info'>
            <div className='card-avatar'>
              <img
                className='image-card'
                src={coctail.strDrinkThumb}
                alt='cocktail'
              />
            </div>
            <div className='card-title'>{coctail.strDrink}</div>
            <div className='card-subtitle'>{coctail.strCategory}</div>

            <div className='card-tags'>
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

          <div className='card-footer'>
            <button
              className='btn-card'
              onClick={() => handleAddOrder(coctail)}
              type='button'
            >
              Add to order
            </button>
            <button
              className='btn-card'
              onClick={() => description(coctail)}
              type='button'
            >
              Description
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
