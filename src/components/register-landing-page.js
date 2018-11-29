import React from 'react';
import RegistrationForm from './registration-form';


export default function RegisterPage(props){
  return(
    <section id='register' className='page-container user-page register-user'>
    <section className='user-area'>
      <RegistrationForm/>
      </section>
      <section className='user-area no-show'>
        <h3>Placeholder</h3>
      </section>
      
    </section>
  )
}