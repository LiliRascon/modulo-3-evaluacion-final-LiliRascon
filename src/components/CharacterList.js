import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import "../stylesheets/CharacterList.scss"



const CharacterList = (props) => {
   const error = !props.cards.length ? <h1>ERROR!! No existe ningún personaje que coincida con la palabra: {props.inputValue}</h1> : ''

   console.log(props.cards.length)


   return (
    
      <div className="container-cardList">
          
         <p className="style-error">{error}</p>
         
         <ul className="cardList">
        
            {props.cards.sort((a, b) => {
               if (a.name < b.name) { return -1 }
               if (a.name > b.name) { return 1 }
               return 0
            })
               .map(cardsObj =>
                  <div className="cards">
                     <li key={cardsObj.id}>

                        <Link className="link" to={`/results/${cardsObj.id}`}>

                           <CharacterCard

                              img={cardsObj.image}
                              name={<p>{cardsObj.name}</p>}
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