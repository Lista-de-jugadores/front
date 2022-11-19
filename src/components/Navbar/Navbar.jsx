import './Navbar.css';

const Navbar = () => {

  return (
    <>
      <div className='navbar-container'>
        <h1 className='navbar-h1'>Player List</h1>
        <input className='navbar-search' type={"search"}></input>
      </div>
    </>
  );
};

export default Navbar;
