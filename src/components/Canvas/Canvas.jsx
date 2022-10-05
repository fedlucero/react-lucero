import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx= canvas.getContext('2d')
    let value = 0
const color = ['#76A7F4','#6B8CE6','#6071D7','#8671E1','#AB71EB','#B188EF','#B69FF2','#BCB6F6','#C1CDF9','#20331A','#33512A','#446C37','#558745','#66A253','#7CB36B','#94C186','#ABCEA1','#C3DCBC','#8C2F39','#9F3541','#B23A48','#BE4E59','#CA626A','#D6767B','#E18A8B','#EFA8A1','#F6B7AC']
ctx.rect(0,0,1200,200)
ctx.strokeStyle = '#575b5d'
ctx.stroke() 

ctx.font="20pt Rubik Dirt";
ctx.fillStyle = color[value];
ctx.fillText("Click para dibujar",450,100);     

let xActual = 0, yActual = 0;
const obtenerXReal = (clientX) => clientX - canvas.getBoundingClientRect().left;
const obtenerYReal = (clientY) => clientY - canvas.getBoundingClientRect().top;
let haComenzadoDibujo = false;
canvas.addEventListener("mousedown", evento => {
    haComenzadoDibujo = true;
});

canvas.addEventListener("mousemove", (evento) => {
    if (!haComenzadoDibujo) {
        return;
    }
  
    xActual = obtenerXReal(evento.clientX);
    yActual = obtenerYReal(evento.clientY);
    ctx.beginPath();
    ctx.fillStyle = color[value]
    ctx.strokeStyle = '#000'
    
    ctx.arc( xActual, yActual,40,0,2*Math.PI)
    ctx.fill()
    ctx.stroke();
    ctx.closePath();
});
["mouseup", "mouseout"].forEach(nombreDeEvento => {
    canvas.addEventListener(nombreDeEvento, () => {
        haComenzadoDibujo = false;
    });
});

canvas.addEventListener("mouseup", (evento) => {
    if (value<26){
        value = value+1;
    }else{
        value=0
    }

});

  }, [])
  
  return <canvas width={1200} height={200} ref={canvasRef} {...props}/>
}

export default Canvas