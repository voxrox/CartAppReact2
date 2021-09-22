import React, { useState } from 'react'
import './All.css'
//import Fade from 'react-reveal/Fade' tried to animate but does not work
import Productfun from "./Product"


var Main=(props)=>{
    const products=props.data
    const [sortfilter,sortfilterfun]=useState(products)
    console.log(products)

    var Sorting=(value)=>{
        console.log(value)
        if(value==="Lowest Price")
        {
        console.log(sortfilter.sort((a,b)=>{return a.price-b.price}))
        var sorted=sortfilter.sort((a,b)=>{return a.price-b.price})
        sortfilterfun(sorted)
        console.log(sortfilter)

        }
    }
    var filtering=(value)=>{
        //const result = words.filter(word => word.wor.includes("x"));
        console.log(value)
        if(value==="All"){
            sortfilterfun(products)
        
        }
        else{
            console.log(value)
        var result=products.filter((item)=>
            item.availableSizes.includes(value));
        sortfilterfun(result)
        }

    }
    return(
    <div>
        <main >
            <div style={{display:"flex",justifyContent:"space-between",borderBottom:"solid",padding:"0.5rem",fontWeight:"bold"}}>
        <div>
        Filter by: <select onChange={(e)=>{filtering(e.target.value)}} style={{padding:"0.25rem",borderRadius:"0.5rem"}}>
                    <option>Select</option>
                    <option>All</option>
                    <option>S</option>
                    <option>L</option>
                    <option>M</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
          </div>  
          <div >
        Sort by:  <select onChange={(e)=>{Sorting(e.target.value)}} style={{padding:"0.25rem",borderRadius:"0.5rem"}}>
                    <option>Select</option>
                    <option>Latest</option>
                    <option>Lowest Price</option>
                    <option>Highest Price</option>
        </select>
        </div>
        </div>
       
            <div className="main">
             {/* <Fade bottom cascade={true}> */}
                <ul className="main">
                {sortfilter.map((product)=>{
                    return( <Productfun key={product.id} product={product} onAdd={props.onAdd}></Productfun> )
                })}
                </ul>
             {/*</Fade />*/}
                
                 
            </div>
        </main>
    </div>
    )


}

export default Main