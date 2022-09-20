import { useState } from "react";

import "./ItemCount.css"

function ItemCount (props){

  const [total,setTotal] = useState(props.inicial)
  const Add = (a) => {
    setTotal(total + a)
  }


 
  

   

    return(
      <div className="botones">
       <div className="itemCount">
        <button style={props.style} className={`btn margen`} onClick={() => Add(1)}  disabled={total === props.stock ? true : null}>+</button>
        <span style={props.styleText} className={`total margen`}>{total}</span>
        <button style={props.style} className={`btn margen`} onClick={() => Add(-1)} disabled={total === props.inicial ? true : null}>-</button>
       </div>


      {
      total === 0
      ?<button  className={`btn añadir`} disabled>Añadir al carrito </button>
      :<button style={props.style} className={`btn añadir`} onClick={() => props.seAgrego(total)}>Añadir al Carrito</button>
      
      }
       </div>
        
       
    )
}

  

export default ItemCount;