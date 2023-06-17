//ACA PONEMOS LOS ESTADOS QUE ESTAN ACTUALMENTE Y QUE DE AHI VA A TOMAR LA DATA. EL INDEX VA A SER MI STORE DE REDUX

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";


//IMPORTAMOS LOS REDUCERS QUE SON LOS ENCARGADOS DE ACTUALIZAR MI STORE

import ReducerOfCategoria from "./reducers/reducer_categoria";
import ReducerOfProductos from "./reducers/reducer_productos";
import ReducerOfCarrito from "./reducers/reducer_carrito";
import ReducerOfOrden from "./reducers/reducer_ordenes";
import ReducerOfAuth from "./reducers/reducer_auth";

//ESTE ES EL ESTADO GLOBAL DE REDUX. CONJUNTO DE ESTADOS GLOBALES, CUYO VALOR SERAN LO QUE ME DEVUELVAN LOS REDUCERS.
const ReducerRaiz = combineReducers( {
    globalCategories: ReducerOfCategoria,
    globalProducts: ReducerOfProductos,
    globalCarrito : ReducerOfCarrito,
    globalOrdenes: ReducerOfOrden,
    globalAuth: ReducerOfAuth
} )

export default createStore( ReducerRaiz, applyMiddleware( thunk ) )//-->CREACION DE LA STORE (CONJUNTO DE ESTADOS GLOBALES)