import './ListPlayers.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import CardsGrid from '../../components/CardsGrid/CardsGrid'
import { getPlayers } from '../../redux/actions'

const ListPlayers = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPlayers("", 0))
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const players = useSelector((state) => state.players.docs)
  const pageinfo = useSelector((state) => state.players)

  return (
    <>
      <SearchBar pageinfo={pageinfo} />
      <CardsGrid players={players}/>
    </>
  )
}

export default ListPlayers
