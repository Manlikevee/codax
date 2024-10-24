'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = Cookies.get('darkMode');
    if (savedMode !== undefined) {
      setIsDarkMode(JSON.parse(savedMode));
      document.body.classList.toggle('dark-mode', JSON.parse(savedMode));
      document.body.classList.toggle('light-mode', !JSON.parse(savedMode));
    }
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    Cookies.set('darkMode', JSON.stringify(newMode), { expires: 365 });
    document.body.classList.toggle('dark-mode', newMode);
    document.body.classList.toggle('light-mode', !newMode);
  };

  return (
    <header>
      <div className="containers">
        <div className="logo">
          <Link href="/">
            CODAXLAB
          </Link>
        </div>
        <div className="links" id="middlelinks">
          <Link href="/form">Inspiration</Link>
          <Link href="/dashboard/userdashboard">Learn Design</Link>
          <a href="">Hire Designers</a>
          <a href="">Hire Developer</a>
          <a href="">Find Work</a>
        </div>
        <div className="links">
          <span className="material-symbols-outlined" onClick={toggleDarkMode}>
            contrast
          </span>
          <Link href="/dashboard/userdashboard" className="reg">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
