import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterDetail.scss';

const CharacterDetail = (props) => {
   console.log(props)

   return (
      <div className="character-details">
         <div className="container-info-detail">
            <div className="container-img-detail">
               <img className="img-info" src={props.cardsObj.image} alt={props.cardsObj.name} />
            </div>
            <div className="container-data">
               {<h2 className="style-">{props.cardsObj.name}</h2>}
               {<p>SPECIES: {props.cardsObj.species}</p>}
               {<p>ORIGIN: {props.cardsObj.origin.name}</p>}
               {<p>EPISODES: {props.cardsObj.episode.length}</p>}
               {<p>STATUS: {props.cardsObj.status}</p>}
            </div>
            <Link to="/">
               <button>Home</button>
            </Link>
         </div>

      </div>
   )
}

export default CharacterDetail;