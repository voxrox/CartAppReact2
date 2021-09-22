import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import "./Components/All.css"
import data from './data.json'
import { useState } from 'react';

function App() {
  var [cartitems,cartfun]=useState([])

  var onRemove=(prod)=>{
    const exist=cartitems.find((x)=>x.id===prod.id)
    if(exist.qty===1){
      cartfun(cartitems.filter((item)=>prod.id!==item.id)
    )}
  else{cartfun(cartitems.map((item)=>item.id===prod.id?{...exist,qty:exist.qty-1}:item))
    
  }
  }



  var onAdd=(prod)=>{
    var exist=cartitems.find(item=>item.id===prod.id)
    if(exist){
      cartfun(
      cartitems.map((i)=>i.id===prod.id?{...exist,qty:exist.qty+1}:i)
      )
    }
      else{
        cartfun(
          [...cartitems,{...prod,qty:1}]
        )
      }
  }
  return (
    <div className="Main1">
     <Header></Header>
     <div className="Main2">
     <Main data={data.products} onAdd={onAdd} ></Main>
     <Sidebar cartitems={cartitems} total={cartitems.length} onRemove={onRemove}></Sidebar>
     </div>
     <Footer></Footer>
    </div>
  );
}

export default App;
