import './PaginateButton.css'
import { useDispatch } from 'react-redux'
import { getPlayers } from '../../redux/actions'

const PaginateButton = ({ input, pageinfo }) => {

  const dispatch = useDispatch();
  const page = pageinfo.page
  const hasprevpage = pageinfo.hasPrevPage
  const hasnextpage = pageinfo.hasNextPage
  const prevpage = pageinfo.prevPage
  const nextpage = pageinfo.nextPage
 
  const nextPage = () => {
    if (page === null && hasnextpage === true) {
      dispatch(getPlayers(input, 1))
    } else if (page != null && hasnextpage === true) {
      dispatch(getPlayers(input, nextpage))
    }
  }

  const prevPage = () => {
    if (hasprevpage === true) {
      dispatch(getPlayers(input, prevpage))
    }
  }

  return (
    <>
      <div className='paginatebutton-container'>
        {(hasprevpage === true) &&
          <button className='paginatebutton-button' id="paginatebutton-prev" onClick={prevPage} >PREV</button>}
        {(hasnextpage === true) &&
          <button className='paginatebutton-button' id="paginatebutton-next" onClick={nextPage} >NEXT</button>}
      </div>
    </>
  )
}

export default PaginateButton


