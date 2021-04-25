import React from 'react';

let year = new Date().getFullYear();

function Footer() {
    return <footer>
        <p>Made by BV Tech &copy; {year} </p>
    </footer>;
}

export default Footer;
