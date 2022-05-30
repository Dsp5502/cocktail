import React from 'react';

const Description = ({ DescriptionCocktail }) => {
  console.log(DescriptionCocktail);

  return (
    <div>
      <h1>{DescriptionCocktail.strDrink}</h1>
      <img src={DescriptionCocktail.strDrinkThumb} alt='ima' />
      <h3>Ingredients</h3>
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
      <p>{DescriptionCocktail.strInstructions}</p>
    </div>
  );
};

export default Description;
