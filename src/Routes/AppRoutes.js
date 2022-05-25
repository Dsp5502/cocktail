import { getData } from '../helpers/getData';

function AppRoutes() {
  const urlCocktails =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Brandy';

  getData(urlCocktails).then(console.log).catch(console.log);

  return <div className='App'></div>;
}

export default AppRoutes;
