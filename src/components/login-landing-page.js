import React from 'react';
import LoginForm from './login-form';


export default function LoginPage(props){
  return(
    <React.Fragment>
      <div id='login'></div>
    <section  className='page-container user-page'>
    <section className='user-area'>
        {/* <h3>Placeholder</h3> */}
        <img className='login-img' alt="login" src={require('./images/landing-people.png') }></img>
      </section>
     <section className='user-area'>
      <LoginForm/>
      </section>
      
    </section>
    </React.Fragment>
  )
}