import { typesCocktail } from '../types/types';

export const listCocktail = (cocktail) => ({
  type: typesCocktail.listCocktail,
  payload: cocktail,
});

export const addCocktail = (cocktail) => ({
  type: typesCocktail.addCocktail,
  payload: cocktail,
});

export const DeleteCocktail = (id) => ({
  type: typesCocktail.deleteCocktail,
  payload: id,
});

export const searchCocktail = (cocktail) => {
  return {
    type: typesCocktail.searchCocktail,
    payload: cocktail
  }
}