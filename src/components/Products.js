import React from 'react';
import {Link} from 'react-router-dom'
import './Products.css';

function Products({data,Add_to_cart}){
    const handleClick=(event)=>{
        Add_to_cart(event.target.value)
    }
    return(
        <div id='product'>
            
            {
                Object.keys(data).map((k,i)=>{
                    let {name,img,price,description}=data[k]
                    return (
                        
                        <li key={i} className='card'>
                            <Link to={`/products/${k}`}>
                                <img src={img} alt={name} />
                                <h3>{name}</h3>
                            </Link>
                            <span>{price}$</span>
                            <p>{description}</p>
                            <button value={k} onClick={handleClick}>Add to Cart</button>
                        </li>
                    )

                }
                )
            }
        </div>
    )
}

export default Products