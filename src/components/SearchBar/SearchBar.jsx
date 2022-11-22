import './SearchBar.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPlayers } from '../../redux/actions';
import PaginateButton from '../PaginateButton/PaginateButton';

const SearchBar = ({pageinfo}) => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch();

  const handleinputchange = (e) => {
    setInput(e.target.value)
  }

  const submitsearch = () => {
    dispatch(getPlayers(input,0))
    console.log("salio")
    
  }

  return (
    <>
      <div className='searchbar-container'>
        <h1 className='searchbar-h1'>Player List</h1>
        <input className='searchbar-search' placeholder='insert nickname or ID' type={"search"} onChange={handleinputchange}></input>
        <button className='searchbar-button' type='submit' onClick={submitsearch}>SEARCH</button>
      </div>
      <PaginateButton input={input} pageinfo={pageinfo}/>
    </>
  );
};

export default SearchBar