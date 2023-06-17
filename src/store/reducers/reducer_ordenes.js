import { OBTENER_ORDEN } from "../actions/action_ordenes";

const EstadoInicialOrdenes = {
    listOfOrders: []
}

const ReducerOfOrden = ( estado = EstadoInicialOrdenes, action ) => {
    switch (action.type) {
        case OBTENER_ORDEN:
            return { ...estado, listOfOrders: action.theOrders } //--->ACTUALIZAO LA LISTA DE ORDEN CON LO QUE RECIBO DE LA LLAMADA A LA API
    
        default:
            return estado
    }
}

export default ReducerOfOrden