const axios = require("axios");
// import axios from "axios";
export const GET_CARDS = "getCards";
export const POST_CARD = "postCard";
export const GET_RESET = "getReset";
export const GET_START = "getStart";
export const DELETE_CARDS = "deleteCards";

export function xx(params) {}
//--
//--
export function postCard(params) {
  console.log("----postCard Ok!");
  return async function (dispatch) {
    try {
      console.log("------parametros post", params);
      const json = await axios.post("http://localhost:3001/data", params);
      console.log(json);
      //return json
      return dispatch({
        type: POST_CARD,
        payload: json,
      });
    } catch (error) {
      // alert("no clientes");
      console.log(error);
    }
  };
}

export default function getCards() {
  console.log("----getCards Ok!");
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/dataall`, {});

      return dispatch({
        type: GET_CARDS,
        payload: json.data,
      });
    } catch (error) {
      // alert("Falla en obtencion de Clientes desde base de datos");
      console.log(error);
    }
  };
}

export function getReset() {
  console.log("----getCards Ok!");
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/reset`, {});

      return dispatch({
        type: GET_RESET,
        payload: json.data,
      });
    } catch (error) {
      // alert("Falla en obtencion de Clientes desde base de datos");
      console.log(error);
    }
  };
}
export function getStart() {
  console.log("----getCards Ok!");
  return async function (dispatch) {
    try {
      var json = await axios.get(`http://localhost:3001/data`, {});

      return dispatch({
        type: GET_START,
        payload: json.data,
      });
    } catch (error) {
      // alert("Falla en obtencion de Clientes desde base de datos");
      console.log(error);
    }
  };
}
export function deleteCards() {
  console.log("----getCards Ok!");
  return async function (dispatch) {
    try {
      var json = await axios.delete(`http://localhost:3001/borrar`, {});

      return dispatch({
        type: DELETE_CARDS,
        payload: json.data,
      });
    } catch (error) {
      // alert("Falla en obtencion de Clientes desde base de datos");
      console.log(error);
    }
  };
}
