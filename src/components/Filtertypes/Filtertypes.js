import React from "react";
import "./Filtertypes.css";

import Type from "./Types/Type";

function Filtertypes()
{
    return(
       <div>

        <div className="filter-types-types-container">
            {/* sendine two parameters image and text    */}
        <Type image="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
        text="Delivery"
        />
        <Type image="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png " 
        text="Dining Out"/>
        <Type />
        </div>
       </div>


    )

}

export default Filtertypes;