import React from 'react';
import RegistrationForm from './registration-form';


export default function RegisterPage(props){
  return(
    <section id='register' className='page-container user-page'>
      <section className='user-area'>
        <h3>Placeholder</h3>
      </section>
      <section className='user-area'>
      <RegistrationForm/>
      </section>
    </section>
  )
}