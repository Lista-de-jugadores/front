import './CardPlayer.css';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
import card from '../../assets/card.svg';
import graph from '../../assets/graph.svg';

const CardPlayer = ({ name, id, balance, status, avatar }) => {
  return (
    <>
      <div className='cardplayer-container'>
        <img src={card} alt={"img"}/>
        <img className='cardplayer-graph' src={graph} alt={"img"}/>
        <h3 className='cardplayer-name' >{name}</h3>
        <h3 className='cardplayer-id' >ID:{id}</h3>
        <h3 className='cardplayer-balance' >{balance}</h3>
        <h3 className='cardplayer-status' >{status}</h3>
        <img className='cardplayer-avatar' src={avatar} alt={"img"} />
      </div>
    </>
  );
};

export default CardPlayer;
