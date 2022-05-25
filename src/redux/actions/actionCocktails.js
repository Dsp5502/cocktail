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

export const listCocktail = (cocktail) => ({
  type: typesCocktail.listCocktail,
  payload: cocktail,
});

export const listProductAsync = () => {
  return async (dispatch) => {
    const collectionTraer = await getDocs(collection(db, 'productpsAmazonas'));
    const productos = [];
    collectionTraer.forEach((doc) => {
      productos.push({ ...doc.data() });
    });
    dispatch(listCocktail(productos));
  };
};

export const addCocktail = (cocktail) => ({
  type: typesCocktail.addCocktail,
  payload: cocktail,
});
export const addProductAsync = (cocktail) => {
  return (dispatch) => {
    addDoc(collection(db, 'cocktails'), cocktail)
      .then((resp) => {
        dispatch(addCocktail(cocktail));
      })
      .catch((error) => {
        console.warn(error);
      });
  };
};

export const DeleteCocktail = (id) => ({
  type: typesCocktail.deleteCocktail,
  payload: id,
});


export const deleteProductAsync = (id) => {
  return async (dispatch) => {
    const colleccionTraer = collection(db, 'cocktails');
    const q = query(colleccionTraer, where('id', '==', id));
    const traerDatosQ = await getDocs(q);
    traerDatosQ.forEach((docum) => {
      deleteDoc(doc(db, 'productpsAmazonas', docum.id));
    });
    dispatch(DeleteCocktail(id));
    dispatch(listProductAsync());
  };
};


export const searchCocktail = (cocktail) => {
  return {
        type: typesCocktail.searchCocktail,
        payload: cocktail
      }
}

