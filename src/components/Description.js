import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCocktailAsync } from '../redux/actions/actionCocktails';

const Description = ({ DescriptionCocktail }) => {
  const dispatch = useDispatch();
  console.log(DescriptionCocktail);
  const navigate = useNavigate();
  const handleAddOrder = (cocktel) => {
    dispatch(addCocktailAsync(cocktel));
    setTimeout(() => {
      navigate(-1);
    }, 1500);
  };

  return (
    <div className='description'>
      <div className='description-boxOne'>
        <h1 className='title-Cocktels'>{DescriptionCocktail.strDrink}</h1>
        <img
          className='img-cocktels'
          src={DescriptionCocktail.strDrinkThumb}
          alt='ima'
        />
      </div>
      <div className='description-boxTwo'>
        <div className='description-section'>
          <section>
            <h3>Ingredients:</h3>
            <ul>
              {DescriptionCocktail.strIngredient1 && (
                <li>{DescriptionCocktail.strIngredient1}</li>
              )}
              {DescriptionCocktail.strIngredient2 && (
                <li>{DescriptionCocktail.strIngredient2}</li>
              )}
              {DescriptionCocktail.strIngredient3 && (
                <li>{DescriptionCocktail.strIngredient3}</li>
              )}
              {DescriptionCocktail.strIngredient4 && (
                <li>{DescriptionCocktail.strIngredient4}</li>
              )}
              {DescriptionCocktail.strIngredient5 && (
                <li>{DescriptionCocktail.strIngredient5}</li>
              )}
              {DescriptionCocktail.strIngredient6 && (
                <li>{DescriptionCocktail.strIngredient6}</li>
              )}
              {DescriptionCocktail.strIngredient7 && (
                <li>{DescriptionCocktail.strIngredient7}</li>
              )}
              {DescriptionCocktail.strIngredient8 && (
                <li>{DescriptionCocktail.strIngredient8}</li>
              )}
              {DescriptionCocktail.strIngredient9 && (
                <li>{DescriptionCocktail.strIngredient9}</li>
              )}
              {DescriptionCocktail.strIngredient10 && (
                <li>{DescriptionCocktail.strIngredient10}</li>
              )}
              {DescriptionCocktail.strIngredient11 && (
                <li>{DescriptionCocktail.strIngredient11}</li>
              )}
              {DescriptionCocktail.strIngredient12 && (
                <li>{DescriptionCocktail.strIngredient12}</li>
              )}
              {DescriptionCocktail.strIngredient13 && (
                <li>{DescriptionCocktail.strIngredient13}</li>
              )}
              {DescriptionCocktail.strIngredient14 && (
                <li>{DescriptionCocktail.strIngredient14}</li>
              )}
              {DescriptionCocktail.strIngredient15 && (
                <li>{DescriptionCocktail.strIngredient15}</li>
              )}
            </ul>
          </section>
          <section>
            <h3>Glass</h3>
            <p>{DescriptionCocktail.strGlass}</p>
          </section>
          <section>
            <h3>Measure</h3>
            <p>{DescriptionCocktail.strMeasure1}</p>
          </section>
        </div>
        <section className='section-instructions'>
          <h3>Instructions:</h3>
          <p>{DescriptionCocktail.strInstructions}</p>
        </section>
        <div className='section-btn'>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className='btn-back'
          >
            {' '}
            Back to List
          </button>
          <button
            onClick={() => {
              handleAddOrder(DescriptionCocktail);
            }}
            className='btn-back'
          >
            {' '}
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
