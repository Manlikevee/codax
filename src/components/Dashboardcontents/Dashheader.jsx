import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
const Dashheader = ({toggleclass}) => {

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
    <div className='dashheader'>
      <div class="logo"><Link href="/">CODAXLAB    </Link></div>
    <div className="srch">
    <span className="material-symbols-outlined">
search
</span>
        <input type="text"  placeholder='Search For AnyThing' /></div>
   
   <div className="sssss">
   <div className="pphoto">
        <img src="https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1719590765~exp=1719594365~hmac=b447faa281472c5fd9ab7bee449fabd3c23f5044a51c8e618afcafc5cb0f6a5f&w=740" alt="" />
    </div>
    <span className="material-symbols-outlined" onClick={toggleDarkMode}>
            contrast
          </span>
    <div className="tggle" onClick={toggleclass}>
    <span className="material-symbols-outlined">
view_headline
</span>
    </div>

    </div> 


    </div>
  )
}

export default Dashheader