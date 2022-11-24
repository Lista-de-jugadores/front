import './CardsGrid.css'
import CardPlayer from '../CardPlayer/CardPlayer'

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
      </div>
    </>
  )
}

export default CardsGrid
