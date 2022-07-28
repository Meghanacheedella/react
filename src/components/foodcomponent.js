import './foodcomponent.css'
import React,{useState} from 'react';
function Food(props){
    const[btntext,setbtntext]=useState("Order Now");
    const[counter,setcounter]=useState(0)
    function checkorder(){
        // if(Number(props.price)>400){
        //     console.log("Free Delivery")
        // }
        // else{
        //     console.log("Delivery Charges added")
        // }
        setbtntext("Add Item");
        setcounter(counter+1)
    }
    return(
        <div className="card">
            <img src={props.img}  alt="" className='card-img'/>
            <p>This is {props.name}</p>
            <h3>Price is {props.price}</h3>
            <button className='btn'onClick={checkorder}>{btntext}{counter}</button>
        </div>
    )
}
export default Food;