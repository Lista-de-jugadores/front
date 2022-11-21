import './CardPlayer.css';
import card from '../../assets/card.svg';
import graph from '../../assets/graph.svg';

const CardPlayer = ({ nickname, id, balance, status, avatar }) => {
   return (
    <>
      <div className='cardplayer-container'>
        <img className='cardplayer-card' src={card} alt={"img"} />
        <img className='cardplayer-graph' src={graph} alt={"img"} />
        <h3 className='cardplayer-nickname' >{nickname}</h3>
        <h3 className='cardplayer-id' >ID:{id}</h3>
        <h3 className='cardplayer-balance' >{balance}</h3>
        <h3 className='cardplayer-status' >{status}</h3>
        <img className='cardplayer-avatar' src={`https://${avatar}`} alt={"img"} />
      </div>
    </>
  );
};

export default CardPlayer;
