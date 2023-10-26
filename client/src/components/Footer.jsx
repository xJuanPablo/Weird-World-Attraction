import React from 'react';
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {CgWebsite} from "react-icons/cg";

export default function Footer() {
  const connect =[
    {
      id: 0,
      icon: <AiFillGithub />,
      link: 'https://github.com/xJuanPablo'
    },    {
      id: 1,
      icon: <AiFillLinkedin />,
      link: 'https://www.linkedin.com/in/juan-archuleta-267991193/'
    },    {
      id: 2,
      icon: <CgWebsite />,
      link: 'https://pablos-tech-tide.com/'
    }
  ]
  return (
    <footer>
      <div>
        <div>
          <ul>
            <h5>WWA</h5>
            <li>Contact</li>
            <li>About</li>
            <li>Recommend an Oddity</li>
            <li>Repository</li>
          </ul>
        </div>
        <div>
          <h5>My Account</h5>
          <ul>
            <li>Sign Out</li>
            <li>My Oddities</li>
            <li>My Reviews</li>
          </ul>
        </div>
      </div>
      <div className='footer_connect'>
        <ul id='connect_links'>
          {connect.map(({id, icon, link}) => (
            <li key={id}><a href={link}>{icon}</a></li>
          ))}
        </ul>
      </div>
      <h6>&copy;2023, xJuanPablo</h6>
    </footer>
  )
}
