import './Navbar.css';
import {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPlayers } from '../../redux/actions';

const Navbar = () => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch();

  const handleinputchange = (e) => {
    setInput(e.target.value)
  }

  const submitsearch = () => {
    dispatch(getPlayers(input))
    console.log("salio")
  }


  return (
    <>
      <div className='navbar-container'>
        <h1 className='navbar-h1'>Player List</h1>
        <input className='navbar-search' type={"search"} onChange={handleinputchange}></input>
        <button type='submit' onClick={submitsearch}>SEARCH</button>
      </div>
    </>
  );
};

export default Navbar;


