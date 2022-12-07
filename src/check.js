import React from 'react'

export default function Check(props) {
  
  // console.log(count)
  return (
    <div className='snek'>
        <p className='sneaker'>{props.com}</p>

        <p className='sneaker-title'>{props.sneker}</p>

        <p className='sneaker-disc'>{props.desc}</p>

        <p className='price'>${props.price} <p className='dis'>{props.dis}%</p></p>
        
        <p className='price-other'>${props.orgprice}</p>

        <span className='btn-section'>
            <span className='btn-syl'>
                <span className='butn' onClick={props.Minus}>-</span>
                <span>{props.count}</span>
                
                <span className='butn' onClick={props.Plus}>+</span>
            </span>
            <button onClick={props.click} className='addcart'>Add to cart</button>
        </span>
    </div>
  )
}
