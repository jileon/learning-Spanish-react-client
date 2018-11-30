import React from 'react';
import BurgerButton from './burgerButton';
import './css/dropdown-menu.css';


export function DropdownMenu (props){
    return (
  <section className="navigation-burger">
<div className="dropdown">
  <button className="dropbtn">
  <BurgerButton/>
  </button>
  <div className="dropdown-content">
  {props.link1}
 {props.link2}
  </div>
</div>
</section>
    )
}

export default DropdownMenu;