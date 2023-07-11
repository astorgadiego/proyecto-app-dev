import {URL_API} from '../../constants/database'

export const OBTENER_ORDEN = 'OBTENER_ORDEN'

export const getOrder = () => {
    return async dispatch => {
        try {
            const response = await fetch( `${URL_API}/ordenes.json`, {//-->ME TRAIGO MIS ORDENES DESDE ESTA RUTA
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            } )
            
            const resultado = await response.json()
            console.log("Resultado",resultado)
            
            const MisOrdenes = Object.keys(resultado).map( key => ( { ...resultado[key], id : key } )  )

            //console.log("LAS ORDENES",MisOrdenes)

            dispatch( { type: OBTENER_ORDEN, theOrders: MisOrdenes } )

        } catch (error) {
            console.log(error)
        }
    }
}