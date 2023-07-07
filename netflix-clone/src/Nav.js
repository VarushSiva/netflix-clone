import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    // Nav affect to show black background after scrollY exceeds 100
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
        <img 
            className='nav-logo'
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
            alt='Netflix Logo'
        />

        <img 
            className='nav-avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='Netflix Avatar'
        />
    </div>
  )
}

export default Nav