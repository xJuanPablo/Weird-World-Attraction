import React from 'react';
import PC from '../../assets/images/PC.png'


function TopAttractions() {
  const topOddities =[
    {
      id: 0,
      pic: PC,
      name: 'placeholder'
    },{
      id: 1,
      pic: PC,
      name: 'placeholder'
    },{
      id: 2,
      pic: PC,
      name: 'placeholder'
    },{
      id: 3,
      pic: PC,
      name: 'placeholder'
    },{
      id: 4,
      pic: PC,
      name: 'placeholder'
    },{
      id: 5,
      pic: PC,
      name: 'placeholder'
    },{
      id: 6,
      pic: PC,
      name: 'placeholder'
    },{
      id: 7,
      pic: PC,
      name: 'placeholder'
    }
  ]
  return (
    <div className='top-attractions-container'>
      <h2 className='topH2'>Charting the Bizarre:
      <br />
      Top Oddities!
      </h2>
      <p className='top-attractions-p'>Dive into the enchanting world of eccentricity! Our Top Oddities are not just attractions; they're crowd favorites that have earned their spots with each enthusiastic click. Explore the extraordinary list, where each like from our community has shaped the lineup. Your clicks, your favorites – the heartbeat of the extraordinary!</p>
      <div className='oddities-scroll-container'>
        {topOddities.map(({id, pic, name})=> (
          <a href="hi" className="attraction-card" key={id}>
          <img src={pic} alt={name}/>
          <div className="attraction-info">
            <h3 className="attraction-name">{name}</h3>
          </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default TopAttractions