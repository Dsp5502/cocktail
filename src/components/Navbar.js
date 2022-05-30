import Search from './search/Search';

const Navbar = ({ setCocktel, setModal, setAnimarModal }) => {
  const handleModal = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };
  return (
    <div className='navbar'>
      <img
        className='navbar-logo'
        src='https://res.cloudinary.com/djjgtili7/image/upload/v1653929090/Tropical_Cocktails_1_oohphd.png'
        alt='logo'
      />
      <Search setCocktel={setCocktel} />
      <button onClick={handleModal} class='cta'>
        <span>List Order</span>
        <svg viewBox='0 0 13 10' height='10px' width='15px'>
          <path d='M1,5 L11,5'></path>
          <polyline points='8 1 12 5 8 9'></polyline>
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
