import React from 'react'

const Dashboaredcards = ({title, value}) => {
  return (
    <div className='dashcard crystalcard'>
        <div className="dnum">{value}</div>
        <div className="dtetx">
            {title}
        </div>
        </div>
  )
}

export default Dashboaredcards