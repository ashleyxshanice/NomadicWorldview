import React from "react";
import Socials from "./Socials";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="footer-wrap">
                <Socials/>
                <p>Copyright © {year}</p>
            </div>
        </footer>
    )

}

export default Footer; 