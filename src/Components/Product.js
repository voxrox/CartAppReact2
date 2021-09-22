import React from 'react'
import "./All.css"



var Productfun=(props)=>{

    const {product}=props
    const {onAdd}=props
    return(
        <div className="product">
            <li>
            <a href={"#"+product.id}>
            <img src={product.image} alt="shirt"></img>
            <div className="title"><a href="/">{product.title}</a></div>
            </a>
            <div className="pricebutton">
            <h3>₹{product.price}</h3>
            <button onClick={()=>onAdd(product)}>Add to cart</button>
            </div>
            </li>
            

        </div>
    )

}

export default Productfun