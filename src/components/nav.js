import React from 'react';

export default class Navigation extends React.Component{
  
  render(){
  return(
    <nav role='navigation'>
    <h1>Learn Spanish</h1>
    <section className="links">
    <a href="#register">Register</a>
    <a href="#login">Login</a>
    </section>
    </nav>
  )
  }
}