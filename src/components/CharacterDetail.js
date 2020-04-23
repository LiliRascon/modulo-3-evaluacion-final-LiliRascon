import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
   console.log(props)

   return (
      <div className="character-details">
         <img src={props.cardsObj.image} alt={props.cardsObj.name} />
         <p>{props.cardsObj.name}</p>
         <Link to="/">
            <button>volver</button>
         </Link>


      </div>
   )
}

export default CharacterDetail;