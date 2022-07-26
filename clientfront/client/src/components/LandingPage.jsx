import React from "react";
import { Link } from "react-router-dom";
import estilos from "./LandingPage.module.css";
export default function LandingPage(params) {
  return (
    <div className={estilos.landing}>
      <h1 className={estilos.texto}> Welcome!</h1>
      <Link to="/home" className={estilos.button}>
        <p></p>
        <button>INGRESAR</button>
        <p></p>
      </Link>{" "}
      <hr></hr>
      <h6 className={estilos.fintexto}>Creado por @kenpulicorre</h6>
    </div>
  );
}
