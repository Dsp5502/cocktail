import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteCocktailAsync } from '../../redux/actions/actionCocktails';

const CardsOrder = ({ cocktails }) => {
  const dispatch = useDispatch();
  console.log(cocktails);

  const handleDeleteItem = (id) => {
    dispatch(DeleteCocktailAsync(id));
  };
  return (
    <div className='cards'>
      {cocktails.length === 0 ? (
        <h1 className='order-empty'>Order Empty</h1>
      ) : (
        cocktails?.map((coctail) => (
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
                className='btn-card-delete'
                onClick={() => handleDeleteItem(coctail.idDrink)}
                type='button'
              >
                Delete Item
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CardsOrder;
