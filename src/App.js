import React from "react";
import Nav from "./nav";
// import Body from './body';
import data from "./data";

import Img from './img';
import Check from './check';
export default function App(){
    const pri=125;
    const [count,setcount]=React.useState(1);
    function Plus(){
        setcount(count+1)
        if(count>=10){
        setcount(10)
        }
    }
    function Minus(){
        setcount(count-1)
        if(count <=1){
        setcount(1)
        }
    }


    let items = data[0];
    function dataClick(){
        console.log(items);
        console.log(items.price*count);
    }
    return(
        <div className="main-align">
            <Nav/>   
            <div className='body-align'>
                <Img/>
                <Check 
                    key = {data.id}
                    {...items}
                    price={items.price*count}
                    click={dataClick}
                    count={count}
                    Plus={Plus}
                    Minus={Minus}
                />
            </div>
        </div>
    )
}