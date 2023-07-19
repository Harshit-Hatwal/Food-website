import React from "react";
import "./Type.css";

function Type({image,text}){

    return(

        <div className="filter-type-container">
            <div className="filter-type-image-container">
            <img className ="filter-type-image"src={image}
            alt=" Filter" /> 


            </div>
           
            <p className="filter-type-text "> {text}  </p>

        </div>
    );

}

// saare properties ek variable mein chahiye toh props use kar sakte ha 
export default Type;