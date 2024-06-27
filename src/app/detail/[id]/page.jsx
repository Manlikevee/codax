'use client'
import React from 'react'

import { useParams } from 'next/navigation';
import Header from '@/components/Header';
const page = () => {
  const { id } = useParams();
  return (
    <div>
            <Header />
            <br/>
       
            <div className="containers">
              <div className="myp">
              <div className="headerphotos">
<img src="https://framerusercontent.com/images/TrGIrrNkVE8oUqPtc5us9PxcJbk.png" alt="" />
              </div>
              <div className="sidesection">
<div className="data">
 <b>
 Byte
</b>
Get Access To POS Terminals, Business Accounts, Business Tools And Access To Top Tier Loans To Grow Your Business.
</div>
<div className="data">
 <strong>
 CATEGORY


</strong>
Finance
</div>

<div className="data">
 <strong>
 FONT


</strong>
Lota Grotesque
</div>


<div className="data">
 <strong>
Stack


</strong>
Lota Grotesque
</div>
<div className="data">

<button>Visit Site</button>
</div>

              </div>
              </div>

            </div>
      {id}</div>
  )
}

export default page