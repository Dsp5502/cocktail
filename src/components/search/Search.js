import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { useDispatch } from "react-redux";
import { searchCocktail } from "../../redux/actions/actionCocktails";

const Search = ({setCocktel}) => {
    // const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            search: ''
        }, validationSchema: Yup.object({
            search: Yup.string().required()
        }),
        onSubmit:({search})=>{
            console.log(search);
            setCocktel(search)
            // dispatch(searchCocktail(search))
        }

    })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search for a Cocktail..."
        onChange={formik.handleChange}
        required
      />
      <button type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
    </form>
  );
};

export default Search;
