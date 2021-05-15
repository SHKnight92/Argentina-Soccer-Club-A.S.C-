import React from 'react';
import './Players.css';
import '../../dist/css/bootstrap.min.css';

const Players = (props) => {
   const{name, image, position, age, marketValue, country} = props.player;
    return (
        <div className = 'players'>
                <div className ="player-image">
                     <img src={image} alt=""/>
                </div>
                <div className ='player-info'>
                    <h3> {name}</h3>
                    <p>Age : {age}</p>
                    <p>Position : {position}</p>
                    <p>Salary : ${marketValue}</p>
                    <p>Country : {country}</p>
                    <button key={props.id} className ='btn btn-info' onClick ={() => props.addHandlePlayer(props.player)}>Add list</button>{/* Bootstrap class  use here */}
                </div>
         </div>  
    );
};

export default Players;