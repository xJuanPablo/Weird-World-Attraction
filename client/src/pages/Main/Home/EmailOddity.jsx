import React from 'react';
import EmailOddityForm from './EmailOddityForm';

function EmailOddity() {
  return (
    <div className='EmailOddity-video-container'>
      <video loop autoPlay muted id='EmailOddity-video'>
        <source src={require('../../../assets/videos/roadtrip.mp4')} type='video/mp4'/>
      </video>
      <EmailOddityForm />
    </div>
  )
}

export default EmailOddity