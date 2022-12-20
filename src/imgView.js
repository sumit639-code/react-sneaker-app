import React from "react";
import product1 from    './images/image-product-1.jpg'
import product2 from    './images/image-product-2.jpg'
import product3 from    './images/image-product-3.jpg'
import product4 from    './images/image-product-4.jpg'
import product1thu from './images/image-product-1-thumbnail.jpg'
import product2thu from './images/image-product-2-thumbnail.jpg'
import product3thu from './images/image-product-3-thumbnail.jpg'
import product4thu from './images/image-product-4-thumbnail.jpg'
export default function Iv(){
    return(
        <div className="body-img">
            <div className='img-sync2' >
                <img src={product1} alt="shoe1" className='item1'/>
                <img src={product1thu} alt="shoe1" className='item2'/>
                <img src={product2} alt="shoe1" className='item2'/>
                <img src={product3} alt="shoe1" className='item2'/>
                <img src={product4} alt="shoe1" className='item2'/>
            </div>
        </div>
    )
}