import React from "react";
import "./Type.css";

function Type(props){
// image and text are the key 

console.log(props);
    return(

        <div className="filter-type-container">
            <div className="filter-type-image-container">
            <img className ="filter-type-image"src={props.image}
            alt=" Filter" /> 


            </div>
           
            <p className="filter-type-text "> {props.text}  </p>

        </div>
    );

}

// saare properties ek variable mein chahiye toh props use kar sakte ha 
export default Type;