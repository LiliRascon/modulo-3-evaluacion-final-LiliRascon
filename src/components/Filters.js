import React from 'react';





const Filter = (props) => {
   const updateInputValue = (event) => {
      props.handleInputValue(event.currentTarget.value)
   }
   return(
      <form>
         {/* como los input los controlamos a traves de react por lo tanto lo hago a traves de las props */}
         <input type="text" value={props.value} onChange={updateInputValue} />
      </form>
   )
}

export default Filter;