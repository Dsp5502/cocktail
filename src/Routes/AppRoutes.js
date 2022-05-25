import { useState } from 'react';
import Cards from '../components/cards/Cards';
import Search from '../components/search/Search';
import { getData } from '../helpers/getData';

function AppRoutes() {
  const [cocktel, setCocktel] = useState('')

   
  const urlCocktails =
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktel}`;

  getData(urlCocktails).then(console.log).catch(console.log);

console.log(cocktel)

  return <div className='App'>
    <center> <Search  setCocktel={setCocktel}/></center>
    <Cards></Cards>

  </div>;

}

export default AppRoutes;
