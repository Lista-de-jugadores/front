import './CardsGrid.css'
import CardPlayer from '../CardPlayer/CardPlayer'
import CardNotPlayer from '../CardNotPlayer/CardNotPlayer'

const CardsGrid = ({ players }) => {
  return (
    <>
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
        {players && !players.length && <CardNotPlayer/>}
      </div>
    </>
  )
}

export default CardsGrid
