'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import myimg from '../../public/trello.png'
const Header = () => {


  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true; // Default to dark mode
  });

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    document.body.classList.toggle('dark-mode', newMode);
    document.body.classList.toggle('light-mode', !newMode);
  };

  // Apply the mode on component mount
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);

  return (
<header>
  <div className="containers">
    <div className="logo">
      <Link href="/">
      CODAXLAB
      </Link>
    </div>
    <div className="links" id="middlelinks">
      <Link href="/form"> Inspiration</Link>
      <a href="Services.html">Learn Design</a>
      <a href="">Hire Designers</a>
      <a href="">Hire Developer</a>
      <a href="">Find Work</a>
    </div>
<div className="links">
<span className="material-symbols-outlined" onClick={toggleDarkMode}>
contrast
</span>
<a href="contactus.html" className="reg">
        Contact Us
      </a>
</div>

  </div>
</header>

  )
}

export default Header