import React from 'react';
import '../stylesheets/CharacterCard.scss';
const CharacterCard = (props) => {
   return(
      <div className='card'>
         <img className="individual-img" src={props.img} alt={props.name} />
         <h2 className="individual-title" >{props.name}</h2>
         <p className="individual-txt" >{props.species}</p>
         <button>Detalle</button>
      </div>
   )
}

export default CharacterCard;