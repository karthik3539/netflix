import React from "react";
import './Logo.css';
import image from "../../../images/general/netflix-bg-image.png";

function Logo(){
    return(
        <div>
            <img className="logo" src={image} alt="Netflix Logo"/>
        </div>
    );
};

export default Logo;
