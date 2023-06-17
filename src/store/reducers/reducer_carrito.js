//ESTE ES MI ESTADO GLOBAL DE MI CARRITO
import carrito from "../../data/carrito";

import { AGREGAR_ITEM, CONFIRMAR_CART, BORRAR_ITEM } from "../actions/action-carrito";

const EstadoInicialCarrito = {
    //theItems: carrito,  ////---> ACA DEBERIA LOS DATOS DESDE UNA BASE DE DATOS, POR AHORA LO HACES DESDE DATA
    theItems: [],
    total: 0 //---> ACA ALMACENA EL TOTAL DEL CARRITO. PARA PODER ACCEDER A ELLA DE FORMA GLOBAL
}

const sumTotal = (listaDeProductos) => {
    //console.log("precio",listaDeProductos.total)

    return listaDeProductos.map(item => item.cantidad * item.precio).reduce((a, b) => a + b, 0) //--> EL REDUCE HACE LA SUMA DEL TOTAL DE CADA PRODUCTO

}

const ReducerOfCarrito = (estado = EstadoInicialCarrito, action) => {

    //ACA DENTRO VA TODA LA LOGICA QUE ACTUALIZA MI ESTADO ACTUAL DE LAS CATEGORIA MEDIANTE EL ACTION. Y DEVUELVE EL ESTADO MODIFICADO
    switch (action.type) {
        case BORRAR_ITEM:
            const limpiarCarrito = [...estado.theItems].filter(prod => prod.id !== action.prodID) //--> ESTO SERA LA NUEVA LISTA CON EL ITEM BORRADO

            return { ...estado, theItems: limpiarCarrito, total: sumTotal(limpiarCarrito) }

        case AGREGAR_ITEM:

            const indexItem = estado.theItems.findIndex(prod => prod.id === action.item.id)

            if (indexItem === -1) { //---> EN CASO DE QUE EL PRODUCTO NO ESTE EN MI CARRITO
                const newProducto = { ...action.item, cantidad: 1 }
                const CarritoActualizado = [...estado.theItems, newProducto]
                console.log(CarritoActualizado)
                return { ...estado, theItems: CarritoActualizado, total: sumTotal(CarritoActualizado) } //--> AGREGO TODO EL PRODUCTO A MI CARRITO
            }

            const productosEnCarrito = [...estado.theItems].map(prod => { //--> EN CASO DE QUE EL PRODUCTO YA ESTÉ EN MI CARRITO
                if (prod.id === action.item.id) prod.cantidad++ //--> LE SUMO UNO A LA CANTIDAD DE ESE PRODUCTO
                return prod
            })

            return { ...estado, theItems: productosEnCarrito, total: sumTotal(productosEnCarrito) }

        case CONFIRMAR_CART:
            return estado

        default:
            return estado
    }


}

export default ReducerOfCarrito