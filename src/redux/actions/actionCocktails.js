import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../Firebase/fireBaseConfing';
import { typesCocktail } from '../types/types';

export const addCocktail = (cocktail) => ({
  type: typesCocktail.addCocktail,
  payload: cocktail,
});

export const addCocktailAsync = (cocktail) => {
  return (dispatch) => {
    addDoc(collection(db, 'cocktai'), cocktail)
      .then((resp) => {
        dispatch(addCocktail(cocktail));
        console.log(resp);
      })
      .catch((error) => {
        console.warn(error);
      });
  };
};
export const listCocktail = (cocktail) => ({
  type: typesCocktail.listCocktail,
  payload: cocktail,
});

export const listProductAsync = () => {
  return async (dispatch) => {
    const collectionTraer = await getDocs(collection(db, 'cocktai'));
    const productos = [];
    collectionTraer.forEach((doc) => {
      productos.push({ ...doc.data() });
    });
    dispatch(listCocktail(productos));
  };
};

export const DeleteCocktail = (id) => ({
  type: typesCocktail.deleteCocktail,
  payload: id,
});

export const DeleteCocktailAsync = (id) => {
  return async (dispatch) => {
    const colleccionTraer = collection(db, 'cocktai');
    const q = query(colleccionTraer, where('id', '==', id));
    const traerDatosQ = await getDocs(q);
    traerDatosQ.forEach((docum) => {
      deleteDoc(doc(db, 'cocktai', docum.id));
    });
    dispatch(DeleteCocktail(id));
    dispatch(listProductAsync());
  };
};

export const searchCocktail = (cocktail) => {
  return {
    type: typesCocktail.searchCocktail,
    payload: cocktail,
  };
};
