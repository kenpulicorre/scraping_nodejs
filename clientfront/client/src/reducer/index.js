import {
  GET_CARDS,
  POST_CARD,
  GET_RESET,
  GET_START,
  DELETE_CARDS,
} from "../actions/index.js";
const initialState = {
  todosCards: [],
  pokemonSinFiltro: [],
  types: [],
  detalle: [],
  todosCiudades: [],
};
function rootReducer(state = initialState, action) {
  //---------
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        todosCards: action.payload,
        pokemonSinFiltro: action.payload,
      };

    case POST_CARD:
      return { ...state };
    case GET_RESET:
      return { ...state };
    case GET_START:
      return { ...state };
    case DELETE_CARDS:
      return {
        ...state,
        todosCards: action.payload,
        pokemonSinFiltro: action.payload,
      };

    default:
      return state;
  }
  //---------
}
export default rootReducer;
