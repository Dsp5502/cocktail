import { useEffect, useState } from 'react';
import Cards from '../components/cards/Cards';
import Search from '../components/search/Search';
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

  console.log(infoCocktel, 'test');

  console.log(cocktel);

  return (
    <div className='App'>
      <center>
        {' '}
        <Search setCocktel={setCocktel} />
      </center>
      <Cards infoCocktel={infoCocktel} />
    </div>
  );
}

export default AppRoutes;
