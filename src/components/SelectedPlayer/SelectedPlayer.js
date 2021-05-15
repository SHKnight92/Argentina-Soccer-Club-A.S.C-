import React from 'react';
import './SelectedPlayer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faDonate } from '@fortawesome/free-solid-svg-icons'

const SelectedPlayer = (props) => {
    const addPlayer = props.addPlayer;
    let totalCost = 0;
    for (let i = 0; i < addPlayer.length; i++) {
        const playerCost = addPlayer[i];
        totalCost = totalCost + playerCost.marketValue;
        
    }
    return (
        <div className='player-list'>
                <div className='details'>
                    <h4>Team Details</h4>
                </div>
                <div className='team-details'>{/* Use FontAwesome here */}
                    <h4><FontAwesomeIcon icon={faUserCircle}/> Selected Players : {addPlayer.length}</h4>
                    <br/>
                        {addPlayer.map(playerName =><p>Name: {playerName.name}; Salary: ${playerName.marketValue}</p> ) }
                        <h4><FontAwesomeIcon icon={faDonate}/> Hiring Cost : ${totalCost}</h4>
                </div>
         </div>
    );
};

export default SelectedPlayer;