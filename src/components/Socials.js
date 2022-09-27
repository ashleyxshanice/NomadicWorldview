import React from "react";

function Socials() {

    function handleClick() {
        console.log("I have clicked");
    }

    return (
        <div className="socials">
            <i className="fa-brands fa-instagram" onClick={handleClick}></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-pinterest"></i>
        </div>  
    );
}

export default Socials; 