import './ListPlayers.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardPlayer from '../../components/CardPlayer/CardPlayer'
import SearchBar from '../../components/SearchBar/SearchBar'
import { getPlayers } from '../../redux/actions'

const ListPlayers = () => {

  const dispatch = useDispatch()
  const players = useSelector((state) => state.players.docs)
  const pageinfo = useSelector((state) => state.players)

  useEffect(() => {
    dispatch(getPlayers("", 0))
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <SearchBar pageinfo={pageinfo} />
      <div className='container-listplayers'>
        {players &&
          players.map(
            (player) => (
              <CardPlayer
                key={player.id}
                id={player.id}
                nickname={player.nickname}
                status={player.status}
                balance={player.balance}
                avatar={player.avatar}
              />
            )
          )
        }
      </div>
    </>
  )
}

export default ListPlayers
