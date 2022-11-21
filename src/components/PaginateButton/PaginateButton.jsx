import './PaginateButton.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayers } from '../../redux/actions';

const PaginateButton = ({ input }) => {

  const dispatch = useDispatch();
  const paginateinfo = useSelector((state) => state.players)
  const page = paginateinfo.page
  const hasnextpage = paginateinfo.hasNextPage
  const hasprevpage = paginateinfo.hasPrevPage
  const nextpage = paginateinfo.nextPage
  const prevpage = paginateinfo.prevPage

  const nextPage = () => {
    if (page === null && hasnextpage === true) {
      dispatch(getPlayers(input, 1))
    } else if (page != null && hasnextpage === true) {
      dispatch(getPlayers(input, nextpage))
    }
  }

  const prevPage = () => {
    if ( hasprevpage === true) {
      dispatch(getPlayers(input, prevpage))
    }
  }

  return (
    <>
      <div className='paginatebutton-container'>
       {(hasprevpage === true) && <button className='paginatebutton-button' type='submit' onClick={prevPage} >PREV</button> }
       {(hasnextpage === true) && <button className='paginatebutton-button' type='submit' onClick={nextPage} >NEXT</button> }
      </div>
    </>
  );
};

export default PaginateButton;


