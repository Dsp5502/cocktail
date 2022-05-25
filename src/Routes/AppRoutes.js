import { getData } from '../helpers/getData';

function AppRoutes() {

  const urlCocktails =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Brandy';

  getData(urlCocktails).then(console.log).catch(console.log);



  return <div className='App'>

    <div className='card'>
      <div>
        <img src="" alt="imagen de cocktel" className="cardImg" />
      </div>

      <div className='BottomCardInfo'>
        <button>agregar</button>
        <button>eliminar</button>
      </div>
    </div>

  </div>;

}

export default AppRoutes;
