import React from 'react'
import product1 from './images/image-product-1.jpg'
import product1thu from './images/image-product-1-thumbnail.jpg'
import product2 from './images/image-product-2-thumbnail.jpg'
import product3 from './images/image-product-3-thumbnail.jpg'
import product4 from './images/image-product-4-thumbnail.jpg'
export default function Img() {
  return (
    <div className='img-sync'>
        <img src={product1} alt="shoe1" className='item1'/>
        <img src={product1thu} alt="shoe1" className='item2'/>
        <img src={product2} alt="shoe1" className='item2'/>
        <img src={product3} alt="shoe1" className='item2'/>
        <img src={product4} alt="shoe1" className='item2'/>
    </div>
  )
}
