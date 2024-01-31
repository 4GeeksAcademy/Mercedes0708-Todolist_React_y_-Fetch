//import react into the bundle
//Index.js suele ser el punto de entreda de las aplicaciones 
//el punto de entrada suele significar: donde se crea la aplicación 

import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//Iniciamos nuestra aplicación
//Renderizar: Mostrar en pantalla

//Componente vamos a llamar a todo elemento de React que podemos ejecutar 
ReactDOM.render(<Home />, document.querySelector("#app"));
