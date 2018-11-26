import React from 'react';
import {connect} from 'react-redux'
import {fetchProtectedData} from '../actions/protected-data';

export class Navigation extends React.Component{
  componentDidMount(){
    console.log(this.props.loggedIn, 'nav 7');
  }



displayLoggedOut = ()=>{
return (
  <section className="navigation-bar">
  <h1><a href='#home'>Learning Spanish</a></h1>
   <nav className='navigation-bar-nav'>
   
   <ul className='navLinks'>
   <li><a href='#register'>Register</a></li>
   <li> 
   <a href='#login'>Login</a> 
 </li>
   </ul>
   </nav>
   </section>
);
};

displayLoggedIn=()=>{
return(
  <section className="navigation-bar">
  <h1><a href='#home'>Learning Spanish</a></h1>
   <nav className='navigation-bar-nav'>
   
   <ul className='navLinks'>
   <li><a href='#register'>Dashboard</a></li>
   <li> 
   <a href='#login'>Logout</a> 
 </li>
   </ul>
   </nav>
   </section>
);
}

  render(){
    console.log(this.props.loggedIn,49);

  return(
<React.Fragment>
  {/* {this.props.loggedIn===null? this.displayLoggedOut(): } */}
  {this.props.loggedIn?  this.displayLoggedIn(): this.displayLoggedOut()}
</React.Fragment>
  )
  }
}

const mapStateToProps=(state)=>{
return{
  loggedIn: state.auth.currentUser !== null
}
}
export default connect(mapStateToProps)(Navigation);