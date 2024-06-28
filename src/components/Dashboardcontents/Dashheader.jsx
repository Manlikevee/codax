import React from 'react'

const Dashheader = ({toggleclass}) => {
  return (
    <div className='dashheader'>
    <div className="srch">
    <span className="material-symbols-outlined">
search
</span>
        <input type="text" /></div>
   
   <div className="sssss">
   <div className="pphoto">
        <img src="https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1719590765~exp=1719594365~hmac=b447faa281472c5fd9ab7bee449fabd3c23f5044a51c8e618afcafc5cb0f6a5f&w=740" alt="" />
    </div>
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