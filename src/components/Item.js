import React from 'react';
import {Link, useParams} from 'react-router-dom';
import './Item.css'

function Item({data,Add_to_cart}){
     const {id}=useParams()
     const shoe=data[id]

     const handleClick=(event)=>{
        Add_to_cart(id)
    }

     if(!shoe){
         return (
            <h3>
                No Match for <code>{`products/${id}`}</code>
            </h3>
         )
    }
    const {name,img,price,color,description}=shoe

    
    return(
        <div className='details'>
            <img src={img} alt={name} />
            <div className='box'>
                <div className='row'>
                    <h2>{name}</h2>
                    <span>{price}$</span>
                </div>
                <p className='color'>
                    {color.map((color,i)=>
                        <button key={i}
                        style={{background:color}}
                        >
                        </button>
                    )}
                </p>
                <p className="description">
                    {description}
                </p>
                <Link to="/cart" className="cart"
                onClick={handleClick}
                >
                    Add to Cart
                </Link>
            </div>
        </div>

    )
}

export default Item