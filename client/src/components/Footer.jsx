import React from 'react';
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {CgWebsite} from "react-icons/cg";

export default function Footer() {

  const information =[
    {
      id: 0,
      listItem: 'Contact',
      link: '/contact'
    },{
      id: 1,
      listItem: 'About',
      link: '/about'
    },{
      id: 2,
      listItem: 'Repository',
      link: 'https://github.com/xJuanPablo/Weird-World-Attraction'
    }
  ]

  const myAccount =[
    {
      id: 0,
      listItem: 'Sign Out',
      link: '/'
    },{
      id: 1,
      listItem: 'My Oddities',
      link: '/'
    },{
      id: 2,
      listItem: 'My Reviews',
      link: '/'
    },
  ]

  const connect =[
    {
      id: 0,
      icon: <AiFillGithub size={55}/>,
      link: 'https://github.com/xJuanPablo'
    },    {
      id: 1,
      icon: <AiFillLinkedin size={55}/>,
      link: 'https://www.linkedin.com/in/juan-archuleta-267991193/'
    },    {
      id: 2,
      icon: <CgWebsite size={55}/>,
      link: 'https://pablos-tech-tide.com/'
    }
  ];
  return (
    <footer>
      <hr className='footer-divider'/>
      <div className='footer-info'>
        <div className='footer-info-link-container'>
          <h5 className='footer-info-h6'>Information</h5>
          <ul className='footer-info-links'>
            {information.map(({id, listItem, link }) => (
              <li key={id}><a href={link}>{listItem}</a></li>
            ))}
          </ul>
        </div>
        <div className='footer-info-link-container'>
          <h5 className='footer-info-h6'>My Account</h5>
          <ul className='footer-info-links'>
            {myAccount.map(({id, listItem, link }) => (
              <li key={id}><a href={link}>{listItem}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className='footer-connect-container'>
        <ul className='footer-connect-links'>
          {connect.map(({id, icon, link}) => (
            <li key={id}><a href={link}>{icon}</a></li>
          ))}
        </ul>
      </div>
      <h6 className='footer-h6'>&copy;2023, xJuanPablo</h6>
    </footer>
  )
}