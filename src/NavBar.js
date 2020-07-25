import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Menu from './images/bars-solid.svg'
import Close from './images/times-solid.svg'
import CartIco from './images/shopping-cart-solid.svg'
import './NavBar.css'

export default function NavBar({Items_in_cart}){
    const [toggle,setToggle]=useState('false')
    

     var len=0
     
     if(Items_in_cart.length>0){
      for(var i=0;i<Items_in_cart.length;i++){
        len=len+Items_in_cart[i].count
      }
    }
    
    
       

    return(
        <header>
            <div className='menu' onClick={()=>setToggle(!toggle)}>
                <img src={Menu} alt='' width='20' />
            </div>
            <div className='logo'>
                <h1>
                    <Link to='/'>Nike</Link>
                </h1>
            </div>
            <nav>
                <ul className={toggle?'toggle':''}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li className='close' onClick={()=>setToggle(!toggle)}>
                        <img src={Close} alt='' width='20' />
                    </li>
                </ul>
                <div className='cart-ico'>
                <span>{len}</span>
                    <Link to='/cart'>
                        <img src={CartIco} alt='' width='20' />
                    </Link>
                </div>

            </nav>
        </header>
        
    )
}