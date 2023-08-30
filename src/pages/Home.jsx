import React from 'react'

const Home = ({users}) => {
  return (
    <div className='home-section' >

      WellCome <span>{users?. email} </span> 
    </div>
  )
}

export default Home