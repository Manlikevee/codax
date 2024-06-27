import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Designcard = ({data}) => {
  return (
    <div className='portfoliocard'>

<div className="imagecard">
  <div className="ovl">
  <span className="material-symbols-outlined">
  arrow_outward

</span>
  </div>

<img src={data.imageUrl} alt="" />
</div>
<div className="textpill">
  <Link href={`detail/${data?.object_key}`} className="viewname">
    <div className="vname">{data?.title}



</div>
    <div className="vservice">{data.service}</div>
  </Link>
  <div className="viewsite">
    <div className="sd">
    <span className="material-symbols-outlined">
favorite
</span>
<div className="sdtxt">
  44
</div>
    </div>


    <div className="sd">
    <span className="material-symbols-outlined">
    visibility
</span>
<div className="sdtxt">
  44
</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Designcard