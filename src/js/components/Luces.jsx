export const Luces = ({color,activo,colores,onClick})=>{
    
    const background = activo ? (colores[color].encendido) : colores[color].apagado;    
    
    
    return(
        <div className="d-flex" onClick={onClick}>
        <div className="rounded-circle m-3"style={{width:"100px",height:"100px", backgroundColor: background}}></div>
        </div>
    )
}