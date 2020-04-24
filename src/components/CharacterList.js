import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import "../stylesheets/CharacterList.scss"


const CharacterList = (props) => {
   const error = !props.cards.length ? <h1>ERROR!! No existe ningún personaje que coincida con la palabra: {props.inputValue}</h1> : ''
   console.log(props.cards.length)
   return (

      <div className="container-cardList">
         <p>{error}</p>
         <ul className="cardList">
            {/* representacion del array que tengo que pintar */}
            {props.cards
               .map(cardsObj =>
                  <div className="card-list">
                     <li key={cardsObj.id}>

                        <Link to={`/results/${cardsObj.id}`}>
                           <CharacterCard

                              img={cardsObj.image}
                              name={<p>Nombre: {cardsObj.name}</p>}
                              species={<p>Especie: {cardsObj.species}</p>}

                           />
                        </Link>

                     </li>



                  </div>
               )}
         </ul>
      </div>
   )
}
export default CharacterList;