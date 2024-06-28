import React from 'react'

const Dashboardtable = () => {
  return (
    <div className='tabledata'>
     <div className='thead'>
        <div className="theads tmax">Title</div>
        <div className="theads tlittles">Status</div>
        <div className="theads ">Rating</div>
        <div className="theads tlittle">Views</div>
    </div>  

    <div className='tbody'>
        <div className="theads tmax">Go Pro Landinhg</div>
        <div className="theads tlittles"><div className="pending">Pending</div></div>
        <div className="theads "> <progress value={20} max={100}/> 40%</div>
        <div className="theads tlittle">400</div>
    </div>
    <div className='tbody'>
        <div className="theads tmax">Go Pro Landinhg</div>
        <div className="theads tlittles"><div className="pending">Pending</div></div>
        <div className="theads "> <progress value={20} max={100}/> 40%</div>
        <div className="theads tlittle">400</div>
    </div>

    <div className='tbody'>
        <div className="theads tmax">Go Pro Landinhg</div>
        <div className="theads tlittles"><div className="pending">Pending</div></div>
        <div className="theads "> <progress value={20} max={100}/> 40%</div>
        <div className="theads tlittle">400</div>
    </div>

    <div className='tbody'>
        <div className="theads tmax">Go Pro Landinhg</div>
        <div className="theads tlittles"><div className="pending">Pending</div></div>
        <div className="theads "> <progress value={20} max={100}/> 40%</div>
        <div className="theads tlittle">400</div>
    </div>

    <div className='tbody'>
        <div className="theads tmax">Go Pro Landinhg</div>
        <div className="theads tlittles"><div className="pending">Pending</div></div>
        <div className="theads "> <progress value={20} max={100}/> 40%</div>
        <div className="theads tlittle">400</div>
    </div>

    <div className='tbody'>
        <div className="theads tmax">Go Pro Landinhg</div>
        <div className="theads tlittles"><div className="pending">Pending</div></div>
        <div className="theads "> <progress value={20} max={100}/> 40%</div>
        <div className="theads tlittle">400</div>
    </div>
    
    </div>

  )
}

export default Dashboardtable