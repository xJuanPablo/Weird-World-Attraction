import React from 'react';
import PC from '../../../assets/images/PC.png'


function TopAttractions() {
  const topOddities =[
    {
      id: 0,
      pic: PC
    },{
      id: 1,
      pic: PC
    },{
      id: 2,
      pic: PC
    },{
      id: 3,
      pic: PC
    },{
      id: 4,
      pic: PC
    },{
      id: 5,
      pic: PC
    },{
      id: 6,
      pic: PC
    },{
      id: 7,
      pic: PC
    }
  ]
  return (
    <div>
      <h2 className='topH2'>Top Oddities</h2>
      <div className='oddities-scroll-container'>
        {topOddities.map(({id, pic})=> (
          <img src={pic} key={id} alt="Cinque Terre"/>
        ))}
      </div>
    </div>
  )
}

export default TopAttractions