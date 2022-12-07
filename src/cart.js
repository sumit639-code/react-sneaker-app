import React from "react";
import thumbnail from './images/image-product-1-thumbnail.jpg';
import delet from './images/icon-delete.svg';
// import './style.css';
export default function Cart(props){
    return(
        <div className="cart-info">
            <p className="text">Cart</p>
            <hr />
            <div className="items">
                <img src={thumbnail} alt="shoe thubmnail" />
                <p className="text text2">
                    {props.name}<br/>
                    ${props.oprice}*{props.cnt} = 
                    <strong>
                        ${props.prc}
                    </strong>
                </p>
                <img src={delet} alt="delete-icon" />
            </div>
            <button type="button ">checkout</button>
        </div>
    )
}