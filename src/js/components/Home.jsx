import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Luces } from "./Luces";

//create your first component

const Colores = {
		LuzRoja:{
		encendido: "red",
		apagado:"#ffffffff"

	},
	LuzNaranja:{
		encendido: "orange",
		apagado: "#ffffffff"
	},
	LuzVerde:{
		encendido: "green",
		apagado: "#ffffffff"
	}
	
};


const Home = () => {

	
	const [ColorActual,setColorActual] = useState("LuzRoja")


	return (
		<div className="justify-content-center align-items-center">
			<div className="container bg bg-dark" style={{width:"60px", height:"100px"}}></div>
			<div className="container bg bg-dark" style={{width:"150px", height:"400px"}}>
				<Luces color="LuzRoja" activo={ColorActual === "LuzRoja"} colores={Colores} onClick={()=>setColorActual("LuzRoja")}/>
				<Luces color="LuzNaranja" activo={ColorActual === "LuzNaranja"} colores={Colores} onClick={()=>setColorActual("LuzNaranja")}/>
				<Luces color="LuzVerde" activo={ColorActual === "LuzVerde"} colores={Colores} onClick={()=>setColorActual("LuzVerde")}/>
			</div>

		</div>
	)
}
export default Home;