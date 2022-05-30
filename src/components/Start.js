import { useState } from 'react';
import Cards from './cards/Cards';
import Navbar from './Navbar';
import Order from './Order';

const Start = ({ setCocktel, infoCocktel }) => {
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  return (
    <>
      <div className={`fondo ${modal ? 'fijar' : ''}`}>
        {!modal && (
          <Navbar
            setCocktel={setCocktel}
            modal={modal}
            setModal={setModal}
            setAnimarModal={setAnimarModal}
          />
        )}

        <Cards infoCocktel={infoCocktel} />
      </div>
      {modal ? (
        <Order setModal={setModal} modal={modal} animarModal={animarModal} />
      ) : (
        ''
      )}
    </>
  );
};

export default Start;
