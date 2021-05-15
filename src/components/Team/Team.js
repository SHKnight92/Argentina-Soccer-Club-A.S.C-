import React, { useEffect, useState } from 'react';
import './Team.css';
import playerData from '../../playerData/playerData.json';
import Players from '../Players/Players';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const Team = () => {
const playerInfo = playerData.slice(0,12);
const [players, setPlayers] = useState(playerInfo);
const [addPlayer, setAddPlayer] = useState([]);
 useEffect(()=>{
     fetch('playerData.json')
     .then(res =>res.json())
     .then(data => setPlayers(data))
 },[])

const addHandlePlayer = (player) =>{
   const newAddPlayer = [...addPlayer, player];
   setAddPlayer(newAddPlayer);
}
    return (
        <div>
              <div>
                    {
                        players.map(player => <Players addHandlePlayer ={addHandlePlayer} player ={player}></Players>)
                     }
              </div>
              <div>
                  <SelectedPlayer addPlayer={addPlayer}></SelectedPlayer>
              </div>
        </div>
    );
};

export default Team;