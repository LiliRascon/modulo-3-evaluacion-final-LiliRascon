import React from 'react';
import '../stylesheets/Filter.scss';
import FontAwesome from 'react-fontawesome';



const Filter = (props) => {
   const updateInputValue = (event) => {

      props.handleInputValue(event.currentTarget.value);

   }

   const preventDefault = (event) => {
      event.preventDefault();
   }

   return (
      <div>
         <p className="text-search">INGRESA TU PERSONAJE FAVORIT<FontAwesome className='fa-arrow-circle-down' name='fa-arrow-circle-down' size='1x' style={{ color: '#08afc7' }} /></p>
         <form onSubmit={preventDefault}>
            {/* como los input los controlamos a traves de react por lo tanto lo hago a traves de las props */}
            <input
               name="title"
               type="text"
               placeholder="Ej. Rick"
               value={props.value}
               onChange={updateInputValue}

            />

         </form>
      </div>
   )
}

export default Filter;