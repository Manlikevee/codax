'use client'
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Dashheader from './Dashheader'
import Dashboaredcards from './Dashboaredcards'
import Image from 'next/image'
import myimg from '../../../public/gb6.png'
import myimg2 from '../../../public/gb(3).png'
import myimg3 from '../../../public/group4.png'
import myimg4 from '../../../public/group5.png'
import Dashboardtable from './Dashboardtable'
const DashLayout = () => {

    const [isopen, setIsopen] = useState(false);
    function toggleclass(){
    setIsopen(!isopen)
    }
  return (
    <div className='dashboardcontainer'>
        <Sidebar isopen={isopen}/>
        <div className="mainarea">
            <Dashheader toggleclass={toggleclass}/>

            <div className="dashcontent">
            <div className="welcometxt">
                            Welcome Veetech To Your Dashboard
                        </div>
                <div className="sharedintwo">
                    <div className="shareinone">
                        <div className="dashcards">
                        <Dashboaredcards title='Projects Uploaded'  value='20000'/>
                        <Dashboaredcards title='Reactions'  value='200'/>
                        <Dashboaredcards title='Sales'  value='$200'/>
                        </div>

                        <br />
                        <div className="welcometxt">
                          My Projects
                        </div>   
    <Dashboardtable/>
                    </div>
                    <div className="shareintwo">

                        <div className="secdats">
                            <div className="stitle">
                            Higest-Rated Works
                            </div>

<div className="highesttable">
{/* <img src="../" alt="" /> */}
<Image src={myimg} width={'100%'} height={'100%'} className='imone' />

<Image src={myimg2} width={'100%'} height={'100%'} className='imtwo' />
<h4>You have no Projects yet</h4>
</div>


                        </div>

                        <div className="secdats">
                            <div className="stitle">
                            Best-selling projects
                            </div>

<div className="highesttable">
{/* <img src="../" alt="" /> */}
<Image src={myimg3} width={'100%'} height={'100%'} className='imone' />

<Image src={myimg4} width={'100%'} height={'100%'} className='imtwo' />
<h4>You have no Sales yet</h4>
</div>


                        </div>
                    </div>

                    
                </div>
            </div>
 
        </div>
    </div>
  )
}

export default DashLayout