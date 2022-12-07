import React from 'react';
import './style.css';
import myLogo from './images/logo.svg';
import cart from './images/icon-cart.svg';
import  avatar from './images/image-avatar.png';
import menu from './images/icon-menu.svg';
import close from './images/icon-close.svg';
import Cart from './cart';
export default function Nav(props) {
  const [show, setshow] = React.useState(false);
  const [Carts, setcart] = React.useState(false);
  // function win(){
  //   {window.onclick =toggle()}
  // }
  function toggle(){
    setshow(prev => !prev)
    // console.log(show)
  }
  function toggleCart(){
    setcart(prevs =>!prevs)
  }
  const menuPage = (
    
        <div className='menu-main' >
          <span className='menu-links'>
            <img src={close} alt="close" type="button" className='close' onClick={toggle}/>
            <a className='link'>Collections</a>
            <a className='link'>Men</a>
            <a className='link'>Women</a>
            <a className='link'>About</a>
            <a className='link'>Contact</a>
          </span>

        </div>
        )
  return (
    <div>
        {show ? menuPage :null}
        <nav>
            <img src={menu} alt="menu"  className='menu' onClick={toggle}/>
            <img src={myLogo} alt="sneaker logo" className='logo'/>
            <div className='links'>
                <a className='link col'>Collections</a>
                <a className='link men'>Men</a>
                <a className='link wom'>Women</a>
                <a className='link abo'>About</a>
                <a className='link con'>Contact</a>
                <span className='line'></span>
            </div>
            <span className="cart-icon" >
                <div className='cart-item' onClick={toggleCart}>1</div>
                <img src={cart} alt="logo of cart" className='cart' onClick={toggleCart}/>
                {Carts ? <Cart 
                  name={props.name}
                  oprice={props.oprice}
                  prc={props.prc}
                  cnt={props.cnt}
                  /> :null}
            </span>
            <img src={avatar} alt="" className='avatar'/>
        </nav>
        <hr />
    </div>
  )
}
