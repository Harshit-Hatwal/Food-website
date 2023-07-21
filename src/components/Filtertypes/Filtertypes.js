import React from "react";
import "./Filtertypes.css";

import Type from "./Types/Type";

function Filtertypes()
{     
     
    const typesData=[
        {
            id:1,
            image:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
        text:"Delivery",
        },

        {
            id:2,
            image:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png " ,
        text:"Dining Out",
        },
        {
            id:2,
            image:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp",
            text:"Nightlife",

        },

    ];
    return(
       <div>
        <div className="filter-types-types-container">
           
{/* array of objects ka use karke  value access kar rhe ha in type component .  */}
{ typesData.map(val =>(<Type image={val.image} text={val.text } /> ))}

 {/* sendine two parameters image and text    */}

        </div>
       </div>
    );

}

export default Filtertypes;