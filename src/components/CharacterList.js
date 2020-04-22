import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
   return(
      <ul className="cardList">
         {/* representacion del array que tengo que pintar */}
         {props.cards
         .filter(cardsObj => props.inputValue === '' || cardsObj.name.toUpperCase().includes(props.inputValue.toUpperCase()))
         .map(cardsObj => 
            <li key={cardsObj.id}>
               <CharacterCard 
               img = {cardsObj.image}
               name = {cardsObj.name}
               />
            </li>

         )}
      </ul>
   )
}
export default CharacterList;