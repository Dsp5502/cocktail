import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cerrar from '../img/cerrar.svg';
import { listProductAsync } from '../redux/actions/actionCocktails';
import CardsOrder from './cards/CardsOrder';

const Order = ({ setModal, animarModal }) => {
  const { cocktails } = useSelector((state) => state.cocktails);
  const dispatch = useDispatch();
  const handleCerrarModal = () => {
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  useEffect(() => {
    dispatch(listProductAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='modal '>
      <div className='cerrar-modal'>
        <img onClick={handleCerrarModal} src={Cerrar} alt='cerrar' />
      </div>
      <h2 className='title-order'>Order</h2>

      <div className={` list ${animarModal ? 'animar' : 'cerrar'}`}>
        <CardsOrder cocktails={cocktails} />
      </div>
    </div>
  );
};

export default Order;
