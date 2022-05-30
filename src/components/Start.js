import React from 'react';
import Cards from './cards/Cards';
import Search from './search/Search';

const Start = ({ setCocktel, infoCocktel }) => {
  return (
    <div className='fondo'>
      <center>
        {' '}
        <Search setCocktel={setCocktel} />
      </center>
      <Cards infoCocktel={infoCocktel} />
    </div>
  );
};

export default Start;
