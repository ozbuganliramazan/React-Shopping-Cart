import React,{useEffect, useState} from 'react';
import './App.css';
import Navbar from "./componebts/Navbar";
import Amazon from './componebts/Amazon';
import Cart from './componebts/cart';

function App() {
const [show, setShow]=useState(true);
const [cart, setCart]=useState([]);

const handleClick =(item)=>{
if(cart.indexOf(item) !== -1) return;
setCart([...cart,item])
}
const handleChange =(item,d)=>{
const ind = cart.indexOf(item);
const arr = cart;
arr[ind].amount += d;
if(arr[ind].amount === 0) arr[ind].amount = 1;
setShow([...arr]);
}

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ?   <Amazon handleClick={handleClick} /> : <Cart cart={cart}  setCart={setCart} handleChange={handleChange} /> }
      
    </React.Fragment>
  );
}

export default App;
