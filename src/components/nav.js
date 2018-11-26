import React from 'react';

export default class Navigation extends React.Component{
  
  render(){
  return(
    <section className="navigation-bar">
 <h1><a href='#home'>Learning Spanish</a></h1>
  <nav className='navigation-bar-nav'>
  
  <ul className='navLinks'>
  <li><a href='#register'>Register</a></li>
    <li> <a href='#login'>Login</a></li>
  </ul>
  </nav>
  </section>
  )
  }
}