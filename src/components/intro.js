import React from 'react';
import './css/intro.css'
export default function Intro(props){
return(
  <React.Fragment>
    <div id='home'></div>
  <section className='page-container'>
  <div className="learn-spanish-img">
  <img src={require('./images/Learn-Spanish.png')} alt="houses"></img>
  </div>
  <section className="intro-text">
    <h2>Welcome to Learning Spanish</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Cras est neque, posuere eu ipsum eu, interdum tincidunt magna. 
       Pellentesque quis laoreet odio. Phasellus finibus interdum luctus. 
       Maecenas eu accumsan sapien, id dapibus mi. Mauris molestie imperdiet orci,
        facilisis ultrices tortor pharetra nec.</p>
        </section>
  </section>
  </React.Fragment>
)

}