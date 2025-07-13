import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Luces } from "./Luces";

//create your first component
const Home = () => {

	const Colores = () =>{
		LuzRoja:{
		encendido: "rojo"
		apagago:"#fffffffff"

	}
	LuzNaranja:{
		encendido: "naranja"
		apagago: "#ffffffff"
	}
	LuzVerde:{
		encendido: "verde"
		apgado: "#ffffffff"
	}
	
}
	
	const [ColorActual,setColorActual] = useState("LuzRoja")

	const color = Colores[ColorActual]

	return (
		<div className="justify-content-center align-items-center">
			<div className="container bg bg-dark" style={{width:"60px", height:"100px"}}></div>
			<div className="container bg bg-" style={{width:"150px", height:"400px"}}>
				<Luces color="rojo" activo={ColorActual === "rojo"} colores={Colores} onClick={()=>setColorActual("LuzRoja")}/>
				<Luces color="naranja" activo={ColorActual === "naranja"} colores={Colores} onClick={()=>setColorActual("LuzNaranja")}/>
				<Luces color="verde" activo={ColorActual === "verde"} colores={Colores} onClick={()=>setColorActual("LuzVerde")}/>
			</div>

		</div>
	)
}
export default Home;