import DashLayout from '@/components/Dashboardcontents/DashLayout'
import React from 'react'
import Dashboardtable from '@/components/Dashboardcontents/Dashboardtable'
import Dashboaredcards from '@/components/Dashboardcontents/Dashboaredcards'
import Link from 'next/link'
const page = () => {
  return (
    <DashLayout>

<div className="dashcards">
                        <Dashboaredcards title='Projects Uploaded'  value='20000'/>
                        <Dashboaredcards title='Reactions'  value='200'/>
              
                        </div>

                        <br />
                        <div className="welcometxt">
                          My Projects
                        </div>   

                        <div className="subtxts">
                        This shows the most recent activities across your  account.
                        </div>
                        <div className="pchase">
                        <div className="srch">
    <span className="material-symbols-outlined">
search
</span>
        <input type="text" placeholder='Search For Any Recent Project'/></div>

        <Link href="/dashboard/CreateProject" className='npro'>New Project</Link>
                        </div>

        <br />
    <Dashboardtable/>

    </DashLayout>
  )
}

export default page