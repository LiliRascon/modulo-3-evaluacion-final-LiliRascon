import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import img7 from '../images/img7.png';
import img8 from '../images/img8.png';
import img9 from '../images/img9.png';
import img10 from '../images/img10.png';
import img11 from '../images/img11.png';
import img12 from '../images/img12.png';
import img13 from '../images/img13.png';
import img14 from '../images/img14.png';
import '../stylesheets/Carrousel.scss';
import Logo from '../components/LogoDetail';

const Landing = () => {

   return (
      <div className="container-one">
         <Logo />
         <div className="content-all">
            <h1>BIENVENIDO</h1>

            <div className="content-carrousel">
               <figure className="figure"><img src={img1} alt="logo" /></figure>
               <figure className="figure"><img src={img2} alt="logo" /></figure>
               <figure className="figure"><img src={img3} alt="logo" /></figure>
               <figure className="figure"><img src={img4} alt="logo" /></figure>
               <figure className="figure"><img src={img5} alt="logo" /></figure>
               <figure className="figure"><img src={img6} alt="logo" /></figure>
               <figure className="figure"><img src={img7} alt="logo" /></figure>
               <figure className="figure"><img src={img8} alt="logo" /></figure>
               <figure className="figure"><img src={img9} alt="logo" /></figure>
               <figure className="figure"><img src={img10} alt="logo" /></figure>
               <figure className="figure"><img src={img11} alt="logo" /></figure>
               <figure className="figure"><img src={img12} alt="logo" /></figure>
               <figure className="figure"><img src={img13} alt="logo" /></figure>
               <figure className="figure"><img src={img14} alt="logo" /></figure>
            </div>
            <div>
               <Link
                  to="/CharacterList"
                  className="landing"
                  href="home.html"
                  title="Comenzar"
               >
                  <button className="button-landing">comenzar</button>
               </Link>

            </div>

         </div>

      </div>

   )
}

export default Landing;