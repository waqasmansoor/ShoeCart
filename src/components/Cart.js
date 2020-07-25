import React from 'react';
import './Item.css';
import './Cart.css'

export default function Cart({ data, Items_in_cart, inc_item, dec_item }) {


    let TotalPrice=0;

    const increase = (event) => {
        inc_item(event.target.value)
    }
    const decrease = (event) => {
        dec_item(event.target.value)
    }

    return (
        <>
            <div>{
            Items_in_cart.map((item, i) => {
                let shoe = data[item.id]
                const { name, img, color, price, description } = shoe
                TotalPrice=TotalPrice+price*item.count
                return (
                    <div className='details' key={i}>
                        <img src={img} alt={name} />
                        <div className='box'>
                            <div className='row'>
                                <h2>{name}</h2>
                                <span>{price*item.count}$</span>
                            </div>
                            <p className='color'>
                                {color.map((color, i) =>
                                    <button key={i}
                                        style={{ background: color }}
                                    >
                                    </button>
                                )}
                            </p>
                            <p className="description">
                                {description}
                            </p>
                            <div className="amount">
                                <button onClick={decrease} className="button" value={item.id}> - </button>
                                <span>{item.count}</span>
                                <button onClick={increase} className="button" value={item.id}> + </button>
                            </div>

                        </div>
                    </div>
                )

            })
        }
            </div>
            <div className="total">
                <h3>
                    Total :{TotalPrice}$
                </h3>
            </div>
        
        </>
    )




}
