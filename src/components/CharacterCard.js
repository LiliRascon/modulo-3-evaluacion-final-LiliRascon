import React from 'react';

const CharacterCard = (props) => {
   return(
      <div className='card'>
         <img src={props.img} alt={props.name} />
         <p>{props.name}</p>

      </div>
   )
}

export default CharacterCard;