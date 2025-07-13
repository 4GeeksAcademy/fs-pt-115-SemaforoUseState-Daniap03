export const Luces = ({color,activo,Colores})=>{
   
    const background = activo ? (Colores[color].encendido) : Colores[color].apagado;    
    
    
    return(
        <div className="d-flex">
        <div className="rounded-circle m-3"style={{width:"100px",height:"100px", backgroundColor: background}}></div>
        </div>
    )
}