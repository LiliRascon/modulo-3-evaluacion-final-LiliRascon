import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
   return (
      <ul className="cardList">
         {/* representacion del array que tengo que pintar */}
         {props.cards
            .filter(cardsObj => props.inputValue === '' || cardsObj.name.toUpperCase().includes(props.inputValue.toUpperCase()))
            .map(cardsObj =>

               <li key={cardsObj.id}>
                  <Link to={`/results/${cardsObj.id}`}>
                     <CharacterCard
                        img={cardsObj.image}
                        name={cardsObj.name}
                     />
                  </Link>
               </li>

            )}
      </ul>
   )
}
export default CharacterList;