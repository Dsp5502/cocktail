import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Description from '../components/Description';

import Start from '../components/Start';
import { getData } from '../helpers/getData';

function AppRoutes() {
  const [cocktel, setCocktel] = useState('');
  const [infoCocktel, setInfoCocktel] = useState([]);
  const [DescriptionCocktail, setDescriptionCocktail] = useState([]);
  const urlCocktails = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktel}`;
  useEffect(() => {
    getData(urlCocktails)
      .then((cocktel) => {
        setInfoCocktel(cocktel);
      })
      .catch(console.log);
  }, [urlCocktails]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Start
              setCocktel={setCocktel}
              infoCocktel={infoCocktel}
              setDescriptionCocktail={setDescriptionCocktail}
            />
          }
        />
        <Route
          path={`/cocktail/:id`}
          element={<Description DescriptionCocktail={DescriptionCocktail} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
