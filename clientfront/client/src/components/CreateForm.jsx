import React from "react";
//hoooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import estilos from "./CreateForm.module.css";
//acciones
import { postCard } from "../actions/index.js";
import getClientes from "../actions/index";
//componentes

//-----------------------------------------
export default function CreateForm(params) {
  const dispatch = useDispatch();
  const allClientes = useSelector((state) => state.todosPokemons);
  //---
  useEffect(() => {
    console.log("entrada", input.name);
    dispatch(getClientes());
  }, []);

  //---
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    nombre: "",
    url: "",
  });
  const [input2, setInput2] = useState({
    expresion: "",
    url2: "",
  });

  useEffect(() => {
    console.log("eroooooooorrrrrr", input.nombre.toString());
    setInput2({
      expresion: input.nombre,
      url2: input.url,
    });
  }, [input, dispatch]);
  //-----logica-----
  //--------------handleOnChange
  function handleOnChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(handleValidacion({ ...input, [e.target.name]: e.target.value }));
    console.log("input1----------\n", input);
  }
  //--------------fin handleOnChange

  //--------------handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    let mm = errors;
    if (input.name == "") {
      setErrors(handleValidacion({ ...input, ["name"]: "" }));
      return alert("debe de agregar cada valor!!");
    }

    if (mm.nombre || mm.url) {
      console.log("errors", errors);
      return alert("debe de agregar cada valor!!");
    } else {
      dispatch(postCard(input2));
      dispatch(getClientes());
      alert("Cliente creado!!");
    }

    //--------------------
    setInput({
      nombre: "",
      url: "",
    });
  }
  //-------------fin handleSubmit
  //-------------handleValidacion
  // let alfabetico = /^[a-z]+$/;
  // let numerico = /^[0-9]+$/;
  const url = /^(ftp|http|https):\/\/[^ "]+$/;
  let handleValidacion = (input) => {
    let errors = {};
    if (!url.test(input.url)) {
      errors.url = "Se espera un valor url";
    }
    return errors;
  };
  //-------------fin handleValidacion

  //---- fin de logica----
  return (
    <div>
      <h1 className={estilos.title}>
        ¡Escriba los datos de la url y expresion!
      </h1>

      <form
        action=""
        onSubmit={(e) => {
          return handleSubmit(e);
        }}
        className={`container ${estilos.formulario}`}
      >
        {/* ------------Nombre----------------- */}

        <div>
          <label htmlFor="">Expresion:</label>
          <input
            type="text"
            value={input.nombre}
            name="nombre"
            placeholder=" Nombre..."
            onChange={(e) => handleOnChange(e)}
          />
          <label htmlFor="" className={estilos.error}>
            {errors.nombre && <p>{errors.nombre}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="">url:</label>
          <input
            type="text"
            value={input.url}
            name="url"
            placeholder="url..."
            onChange={(e) => handleOnChange(e)}
          />
          <label htmlFor="" className={estilos.error}>
            {errors.url && <p>{errors.url}</p>}
          </label>
        </div>

        <button type="submit" className={estilos.boton}>
          {" "}
          post datos
        </button>
      </form>
    </div>
  );
}
