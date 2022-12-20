import React from "react";
import thumbnail from './images/image-product-1-thumbnail.jpg';
import delet from './images/icon-delete.svg';

export default function Cart(props){
    const cartitems = (
        <div className="items">
            <img src={thumbnail} alt="shoe thubmnail" />
            <p className="text text2">
                {props.name}<br/>
                ${props.oprice}*{props.cnt} = 
                <strong>
                    ${props.prc}
                </strong>
            </p>
            <img src={delet} onClick={props.add} alt="delete-icon" />
        </div>
    )
    return(
        <div className="cart-info">
            <p className="text">Cart</p>
            <hr />
            
            {props.name.length > 0 ? (
                cartitems
            ) :(<h3 className="no-item">No Items </h3>)}
                
            
            <button type="button ">checkout</button>
        </div>
    )
}