import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';




function Socials() {

    return (
        <div class="socials">
            <FontAwesomeIcon icon={brands('twitter')} />            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-pinterest"></i>
        </div>  
    );
}

export default Socials; 