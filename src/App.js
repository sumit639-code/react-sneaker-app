import React from "react";
import Nav from "./nav";
// import Body from './body';
import data from "./data";
import Img from './img';
import Check from './check';
export default function App(){
    const pri=125;
    const [num, setnum] = React.useState(0);
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
    const [ob,setob]=React.useState({
        'name':"",
        'oprice':"",
        'prc':"",
        'cnt':"",
    });

    let items = data[0];
    function dataClick(){
        var ob ={
            id:items.id,
            name:items.sneker,
            oprice:items.price,
            prc:items.price*count,
            cnt:count,
        }
        setob(ob)
        setnum(1);
        
    }
    function Add(){
        setob({
            'name':"",
            'oprice':"",
            'prc':"",
            'cnt':"",
        } )
        setnum(0);
    }

    return(
        <div className="main-align">
            <Nav 
                name={ob.name}
                oprice={ob.oprice}
                prc={ob.prc}
                cnt={ob.cnt}
                add={Add}
                num={num}
            /> 
            <div className='body-align'>
                <Img/>
                <Check 
                    key = {data.id}
                    {...items}
                    price={items.price}
                    click={dataClick}
                    count={count}
                    Plus={Plus}
                    Minus={Minus}
                />
            </div>
        </div>
    )
}