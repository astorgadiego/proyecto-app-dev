import { ELECCION_PRODUCTO, PRODUCTOS_FILTRADOS } from "../actions/action_productos";

import products from "../../data/products";

const EstadoIniciaProductos = {
    theProductos : products, //---> ACA DEBERIA LOS DATOS DESDE UNA BASE DE DATOS, POR AHORA LO HACES DESDE DATA
    ProductosFiltrados: [], //---> ACA VAN LOS PRODUCTOS FILTRADOS POR CATEGORIA
    productoSeleccionado : null  //---> ACA ALMACENA LA CATEGORIA SELECCIONADA. PARA PODER ACCEDER A ELLA DE FORMA GLOBAL
}

const ReducerOfProductos = ( estado = EstadoIniciaProductos, action ) => { //--> FUNCION REDUCER
    //ACA DENTRO VA TODA LA LOGICA QUE ACTUALIZA MI ESTADO ACTUAL DE LAS CATEGORIA MEDIANTE EL ACTION. Y DEVUELVE EL ESTADO MODIFICADO
    switch(action.type){

        case ELECCION_PRODUCTO:
            return {...estado, productoSeleccionado: estado.theProductos.find( prod=> prod.id === action.IDofProducto ) } //--> DEFINO CUAL VA  ASER EL PRODUCTO SELECCIONADO
            
        case PRODUCTOS_FILTRADOS :
            return { ...estado, ProductosFiltrados: estado.theProductos.filter( prod => prod.category === action.IdOfCategoria ) } //--> FILTRO LOS PRODUCTOS POR CATEGORIA ELEGIDA

        default:
            return estado
    }

}

export default ReducerOfProductos