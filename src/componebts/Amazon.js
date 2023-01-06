import React from "react";
import data from '../data'
import Cards from './cards'
import '../styles/amazon.css'
const Amazon =({handleClick})=>{
   return(
   <section>
    {data.map((item)=>(
        <Cards key={item.id} item={item} handleClick={handleClick} />
    ))}
   </section>
   )
}

export default Amazon