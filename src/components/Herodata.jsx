import React from 'react'
import Image from 'next/image'
import myimg from '../../public/grpp.png'
import myimgtwo from '../../public/grppp.png'
const Herodata = () => {
  return (
<div className="herodata">

    <div className="herotop"></div>
    <div className="herocenter">
        <br />
        <br /><br />
        <h1>Discover the world’s top
designers & creatives</h1>
<div className="subtxt">
Codax is a community of top-tier developers, designers, and tech professionals. CodaxLab is the premier destination to discover and showcase creative work, and it is home to the world's leading design experts.
</div>
        <div className="search">
            <div className="searchpill">
                <input type="text" placeholder='Enter product, categories, service name...'/>
                <button>Search</button>
            </div>
        </div>
    </div>
<div className="herobottom">
   <div className="sids">
   <Image src={myimg} width={'100%'} height={'100%'} className='myimg'/>
    </div>
    <div className="sids">
   <Image src={myimgtwo} width={'100%'} height={'100%'} className='myimg'/>
    </div>
</div>
</div>
  )
}

export default Herodata