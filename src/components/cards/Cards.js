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
                            <h2>Name:{coctail.strDrink}</h2>
                            <h3>tags</h3>
                            <h3>Ingredients:</h3>
                            <div className='ingredients'>
                                <h5>{coctail.strIngredient1}</h5>
                                <h5>{coctail.strIngredient2}</h5>
                                <h5>{coctail.strIngredient3}</h5>
                                <h5>{coctail.strIngredient4}</h5>
                                <h5>{coctail.strIngredient5}</h5>
                                <h5>{coctail.strIngredient6}</h5>
                                <h5>{coctail.strIngredient7}</h5>
                                <h5>{coctail.strIngredient8}</h5>
                                <h5>{coctail.strIngredient9}</h5>
                                <h5>{coctail.strIngredient10}</h5>
                                <h5>{coctail.strIngredient11}</h5>
                                <h5>{coctail.strIngredient12}</h5>
                                <h5>{coctail.strIngredient13}</h5>
                                <h5>{coctail.strIngredient14}</h5>
                                <h5>{coctail.strIngredient15}</h5>
                            </div>
                            <hr />

                            <h5>Instructions:</h5>
                            <h5 className="instructions"> {coctail.strInstructions}</h5>
                            <h3>Glass: {coctail.strGlass}</h3>
                            <h3>Category:&nbsp;{coctail.strCategory}</h3>
                        </div>

                        <div className='BottomCardInfo'>
                            <button className='cardButton'>agregar</button>

                        </div>
                    </div>
                </div>
            ))}

        </div>

    );
};

export default Cards;
