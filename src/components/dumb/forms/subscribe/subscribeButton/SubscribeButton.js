import React from "react";
import './SubscribeButton.css';
import image from "../../../../../images/icons/right-arrow.png";

function SubscribeButton({children, ...restProps}){
    return(
        <div className="subscribe-button">
            <a  href="./signup" {...restProps}>
                {children}
            <img className="subscribe-button-image" src={image} />
            </a> 
        </div>
    )
}
export default SubscribeButton;