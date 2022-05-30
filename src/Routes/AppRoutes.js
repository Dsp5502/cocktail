import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Start from '../components/Start';
import { getData } from '../helpers/getData';

function AppRoutes() {
  const [cocktel, setCocktel] = useState('');
  const [infoCocktel, setInfoCocktel] = useState([]);
  const urlCocktails = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktel}`;
  useEffect(() => {
    getData(urlCocktails)
      .then((cocktel) => {
        setInfoCocktel(cocktel);
      })
      .catch(console.log);
  }, [urlCocktails]);

  console.log(infoCocktel);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Start setCocktel={setCocktel} infoCocktel={infoCocktel} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
