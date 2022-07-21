import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import estilos from "./Home.module.css";
//acciones
import { getReset, getStart, deleteCards } from "../actions/index.js";
import getCards from "../actions/index";
//componentes
import Card from "./Card";
import Loader from "./Loader";
import CreateForm from "./CreateForm";
//-----------------------------------------
export default function Home(params) {
  //----hook iniciales---------
  const dispatch = useDispatch(); //mapdispatchtoprops
  const allCards = useSelector((state) => state.todosCards); //mapstatetoprops
  const [signal, setSignal] = useState(true);
  //------------------cartastopage-----

  const pokesToPage = allCards;
  //------------------fin cartasToPage-----

  useEffect(() => {
    setSignal(true);
    dispatch(getCards());
    setTimeout(function () {
      setSignal(false);
      console.log("---------------todas las cartas2 son", allCards);
      if (allCards.length < 1) {
      }
    }, 1000);
  }, [dispatch]); //[] =1sola vez,[state]=cada state ejecuta
  useEffect(() => {
    dispatch(getCards());
    console.log("---------------todas las cartas son", allCards);
  }, []);

  function handleOnGetall(e) {
    dispatch(getCards());
  }
  function handleOnReset(e) {
    dispatch(getReset());
  }
  function handleOnStart(e) {
    dispatch(getStart());
  }

  function handleOnBorrar(e) {
    dispatch(deleteCards());
  }

  if ((allCards.length < 1 && signal) || allCards == null) {
    return <Loader />;
  }

  return (
    <div className={estilos.contenedor}>
      <h1 className={estilos.title}>¡Creacion de peticion!</h1>
      <div className={`container ${estilos.Contenedor_filtro}`}>
        <CreateForm />
        <div class="container " className={`container ${estilos.estilo1}`}>
          <button
            onClick={(e) => handleOnStart()}
            type="button"
            class="btn btn-primary"
          >
            INICIAR
          </button>
          <p>||</p>
          <button
            onClick={(e) => handleOnReset()}
            type="button"
            class="btn btn-primary"
          >
            PARAR
          </button>
          <p>||</p>
          <button
            onClick={(e) => handleOnGetall()}
            type="button"
            class="btn btn-primary"
          >
            RECARGAR
          </button>
          <button
            onClick={(e) => handleOnBorrar()}
            type="button"
            class="btn btn-primary"
          >
            BORRAR TODO
          </button>
        </div>

        <div className={estilos.contenedor_pokes}>
          <Fragment>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">characters</th>
                  <th scope="col">Header</th>
                  <th scope="col">createdAt</th>
                </tr>
              </thead>
              <tbody>
                {allCards?.map((el) => {
                  console.log("------------------mirando elemento-", el);
                  return (
                    <tr>
                      <th scope="row">{el.id}</th>
                      <td>{el.character}</td>
                      <td>{el.header}</td>
                      <td>{el.createdAt}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Fragment>
        </div>
        {/* llamando al componente card----- */}
      </div>
    </div>
  );
}
