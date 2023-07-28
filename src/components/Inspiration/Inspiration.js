import React from "react";
import "./Inspiration.css";  


import { inspirationData } from "./constants";
import Text from "../../common/Text/Text";
function Inspiration()
{
    return (

<div className="inspiration-container">
{/* <p className="inspiration-title"> 
     </p> */}
{/* passing the text promp */}
    <Text text="Inspiration for your First Order" />
    {/* inspiration data ko map karenge uske liye inspiration caard ko baar baar kholenge with different values . */}
        <div className="inspiration-card-container">
        {inspirationData.map(value=> ( <InspirationCard image={value.image} text ={value.text} />))}
        </div>

</div>
    );

}
export default Inspiration; 