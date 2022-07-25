import './foodcomponent.css'
function food(props){
    function checkorder(){
        if(Number(props.price)>400){
            console.log("Free Delivery")
        }
        else{
            console.log("Delivery Charges added")
        }
    }
    return(
        <div className="card">
            <img src={props.img}  alt="" className='card-img'/>
            <p>This is {props.name}</p>
            <h3>Price is {props.price}</h3>
            <button className='btn'onClick={checkorder}>Order Now</button>
        </div>
    )
}
export default food;