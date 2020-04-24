import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterDetail.scss';
import FontAwesome from 'react-fontawesome';
import '../images/logo.png';
import LogoDetail from '../components/LogoDetail';
import Emoji from '../components/Emoji';

const CharacterDetail = (props) => {
   const spec = props.cardsObj.species === 'Human' ? <Emoji className="emoji-spec" symbol="👨🏻 👩🏻" label="human"/> : <Emoji className="emoji" symbol="👽" label="Extraterrestre"/>
   const icon = props.cardsObj.status === 'Alive' ? <FontAwesome className='heart' name='heart' size='2x' spin style={{ color: 'red' }} /> : <Emoji className="emoji-status" symbol="⚰️" label="Dead"/>
   
   console.log(props)
   

   return (
      
      <div className="character-details">
         <LogoDetail className="hidden" />
         <div className="container-info-detail">
            <div className="container-img-detail">
               <img className="img-info" src={props.cardsObj.image} alt={props.cardsObj.name} />
            </div>
            <div>
            <div className="container-data">
               
               {<h2 className="style-title">{props.cardsObj.name}</h2>}
               {<p className="style-title">SPECIES:{spec} {props.cardsObj.species}</p>}
               {<p className="style-title">ORIGIN: {props.cardsObj.origin.name}</p>}
               {<p className="style-title">EPISODES: {props.cardsObj.episode.length}</p>}               
               {<p className="style-title">STATUS:{icon}</p>}
            </div>
            <div>
            <Link to="/">
               <button>Home</button>
            </Link>
            </div>
            </div>
           
         </div>

      </div>
   )
}

export default CharacterDetail;