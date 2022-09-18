import React from "react";
import Socials from "./Socials";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div class="footer-wrap">
                <Socials/>
            </div>
            <p>Copyright © {year}</p>
        </footer>
    )

}

export default Footer; 