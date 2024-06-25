import Designcard from '@/components/Designcard'
import Header from '@/components/Header'
import Herodata from '@/components/Herodata'
import Filterfields from '@/components/filtertop/Filterfields'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
              <Herodata/>
      <div className="containers">

      <Filterfields/>

      <div className="portfoliogrid">
        <Designcard/>
        <Designcard/>
        <Designcard/>
        <Designcard/>
      </div>
      </div>


    </div>
  )
}

export default page