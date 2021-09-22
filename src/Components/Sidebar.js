import React from 'react'
import "./All.css"



var Sidebar=(props)=>{
    const {total,cartitems,onRemove}=props
    var totalprice=cartitems.reduce((a,c)=>a=a+c.price*c.qty,0)
       return(
        <div>
            <aside className="side">
            <div>{total===0 && <div>Your cart is empty</div>}</div>
            <div>{total!==0 && <div><h3> total {total} added to cart </h3></div>}</div>
                {cartitems.map((item)=>{
                    return(
                        <div>
                        <div className="cart3">
                            <img src={item.image} alt="shirt"></img> 
                           <h4>{item.title}</h4>
                            <div>
                            <h4>{item.qty} x ₹{item.price}</h4>   
                           <button style={{padding:"0.5rem",borderRadius:"0.5rem"}}onClick={()=>onRemove(item)}>Remove</button>
                            </div>
                           
                           
                            </div>
                       
                            </div>
                    )
                })}
                <hr></hr>

                {total!==0 &&<div className="cart3">
                    <h3>Total  </h3>
                   <h3>₹{totalprice}</h3>
                
                </div>
                }
                {total!==0 && <div style={{textAlign:"center"}}>
                    <button style={{padding:"0.5rem",borderRadius:"0.5rem"}}onClick={()=>alert("Implement checkout")}>Proceed</button>
                </div>}
                
            </aside>
    </div>
       )


}

export default Sidebar