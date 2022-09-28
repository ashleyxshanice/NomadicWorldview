
import React from "react";

function Socials() {

    function handleClick() {
        let name = "instagram";
        let id = "facebook";

        if (name === "instagram") {
             console.log("I clicked IG"); 
        } else if (id === "facebook") {
             console.log("I did not click IG");
        }
    }
  

    return (
        <div className="socials">
            <i className="fa-brands fa-instagram" name= "instagram" onClick={handleClick}></i>
            <i className="fa-brands fa-facebook" id= "facebook" onClick={handleClick}></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-pinterest"></i>
        </div>  
    );
}

export default Socials; 