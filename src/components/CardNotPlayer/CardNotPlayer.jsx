import './CardNotPlayer.css'
import graph from '../../assets/graph.svg'

const CardNotPlayer = () => {

  const textgraph = "No players found"

  return (
    <>
      <div className='cardnotplayer-container'>
        <img className='cardnotplayer-graph' src={graph} alt={"img"} />
        <h3 className='cardnotplayer-text' >{textgraph}</h3>
      </div>
    </>
  )
}

export default CardNotPlayer
