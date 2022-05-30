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
      <button onClick={handleModal}>List Order</button>
    </div>
  );
};

export default Navbar;
