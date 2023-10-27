import React from 'react';
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {CgWebsite} from "react-icons/cg";

export default function Footer() {
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
  ]
  return (
    <footer>
      <hr className='footer-divider'/>
      <div className='footer-info'>
        <div className='footer-info-link-container'>
          <h5 className='footer-info-h6'>Information</h5>
          <ul className='footer-info-links'>
            <li>Contact</li>
            <li>About</li>
            <li>Repository</li>
            <li>Recommend an Oddity</li>
          </ul>
        </div>
        <div className='footer-info-link-container'>
          <h5 className='footer-info-h6'>My Account</h5>
          <ul className='footer-info-links'>
            <li>Sign Out</li>
            <li>My Oddities</li>
            <li>My Reviews</li>
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
