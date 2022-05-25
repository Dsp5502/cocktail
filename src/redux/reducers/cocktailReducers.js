import { typesCocktail } from '../types/types';

const initialState = {
  cocktails: [],
};

export const cocktailReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesCocktail.listCocktail:
      return {
        cocktails: action.payload,
      };
    case typesCocktail.addCocktail:
      return {
        cocktails: [...state.cocktails, action.payload],
      };
    case typesCocktail.deleteCocktail:
      return {
        cocktails: state.cocktails.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
