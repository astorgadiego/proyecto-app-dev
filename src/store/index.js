//ACA PONEMOS LOS ESTADOS QUE ESTAN ACTUALMENTE Y QUED EAHI VA A TOMAR LA DATA. EL INDEX VA A SER MI STORE DE REDUX

import { createStore, combineReducers } from "redux";


//IMPORTAMOS LOS REDUCERS QUE SON LOS ENCARGADOS DE ACTUALIZAR MI STORE

import ReducerOfCategoria from "./reducers/reducer_categoria";
import ReducerOfProductos from "./reducers/reducer_productos";

//ESTE ES EL ESTADO GLOBAL DE REDUX. CONJUNTO DE ESTADOS GLOBALES, CUYO VALOR SERAN LO QUE ME DEVUELVAN LOS REDUCERS.
const ReducerRaiz = combineReducers( {
    globalCategories: ReducerOfCategoria,
    globalProducts: ReducerOfProductos
} )

export default createStore( ReducerRaiz )//-->CREACION DE LA STORE (CONJUNTO DE ESTADOS GLOBALES)