import { useState } from "react";
import "./ItemCount.css"

function ItemCount (props){
  const [total,setTotal] = useState(props.inicial)
  const Add = (a) => {
    setTotal(total + a)
  }
  const seAgrego = (total) => {
    alert(`Se agregaron ${total} al carrito`)
  }

    // return(
    //   <div className="botones">
    //    <div className="itemCount">
    //     <button className="btn margen" onClick={() => Add(1)}  disabled={total === props.stock ? true : null}>+</button>
    //     <span className="total margen">{total}</span>
    //     <button className="btn margen" onClick={() => Add(-1)} disabled={total === props.inicial ? true : null}>-</button>
    //    </div>
    //    <button className="btn añadir" onClick={() => seAgrego(total)}>Añadir al Carrito</button>
    //    </div>
        
       
    // )

    return(
      <div className="botones">
       <div className="itemCount">
        <button style={props.style} className="btn margen" onClick={() => Add(1)}  disabled={total === props.stock ? true : null}>+</button>
        <span className="total margen">{total}</span>
        <button className="btn margen" onClick={() => Add(-1)} disabled={total === props.inicial ? true : null}>-</button>
       </div>
       <button className="btn añadir" onClick={() => seAgrego(total)}>Añadir al Carrito</button>
       </div>
        
       
    )
}


// si no se pasa por props, al ser un objeto las propiedades van entre {}
// function ItemCount ({inicial,stock}){
//     const [total,setTotal] = useState(inicial)
//     const Add = (a) => {
//       setTotal(total + a)
//     }
  
//       return(
//          <div>
//           <button onClick={() => Add(+1)}  disabled={total === stock ? true : null}>+</button>
//           <p>{total}</p>
//           <button onClick={() => Add(-1)} disabled={total === inicial ? true : null}>-</button>
//          </div>
          
         
//       )
//   }
  

export default ItemCount;