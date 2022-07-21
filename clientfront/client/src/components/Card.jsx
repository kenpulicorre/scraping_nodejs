import React from "react";
//hoooks
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import estilos from "./Home.module.css";
//acciones

export default function Card({ id, name }) {
  console.log("el type es ", name);
  return <div></div>;
}
