'use client'
import React from 'react'
import Link from 'next/link'
const Sidebar = ({isopen}) => {



  return (
<div className={isopen ? 'sidebarshow sidebar' : 'sidebar'}>
<div class="logo"><Link href="/">CODAXLAB</Link></div>

    
    <div className="sidelinks">
      <Link href='#' className='sidelink vmyactivelink'>
      <span class="material-symbols-outlined">
grid_view
</span>  
<div className="navtext">Dashboard
</div>
        </Link>

        <Link href='#' className='sidelink'>
      <span class="material-symbols-outlined">
      inventory_2
</span>  
<div className="navtext">Projects
</div>
        </Link>


        <Link href='#' className='sidelink'>
      <span class="material-symbols-outlined">
      note_stack
</span>  
<div className="navtext">Templates
</div>
        </Link>
        <Link href='#' className='sidelink'>
      <span class="material-symbols-outlined">
      discover_tune
</span>  
<div className="navtext">Settings
</div>
        </Link>



    </div>
    <Link href='#' className='sidelink btm'>
      <span class="material-symbols-outlined">
grid_view
</span>  
<div className="navtext">Logout
</div>
        </Link>
    </div>
  )
}

export default Sidebar