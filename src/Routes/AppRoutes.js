import Cards from '../components/cards/Cards';
import Search from '../components/search/Search';
import { getData } from '../helpers/getData';

function AppRoutes() {

  const urlCocktails =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Brandy';

  getData(urlCocktails).then(console.log).catch(console.log);



  return <div className='App'>
    <center> <Search /></center>
    <Cards></Cards>

  </div>;

}

export default AppRoutes;
