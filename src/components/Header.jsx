import React from 'react'

const Header = () => {
  return (
<header>
  <div className="containers">
    <div className="logo">
      <a href="index.html">
      CODAXLAB
      </a>{" "}
    </div>
    <div className="links" id="middlelinks">
      <a href="about.html"> Inspiration</a>
      <a href="Services.html">Learn Design</a>
      <a href="">Hire Designers</a>
      <a href="">Hire Developer</a>
      <a href="">Find Work</a>
    </div>
<div className="links">
<a href="contactus.html" className="reg">
        Contact Us
      </a>
</div>

  </div>
</header>

  )
}

export default Header