//ACA VAN LOS DIFERENTES TIPOS DE ACCIONES QUE VOY A QUERER REALIZAR EN MI CARRITO

import { URL_API } from "../../constants/database";

//MIS ACCIONES QUE VAMOS A USAR EN EL REDUCER, POR ESO LAS EXPORTO
export const AGREGAR_ITEM = 'AGREGAR_ITEM'
export const BORRAR_ITEM= 'BORRAR_ITEM'
export const CONFIRMAR_CART = 'CONFIRMAR_CART'

//UNA FUNCION POR CADA ACCION

export const addItem = ( item ) => ({ //VOY A QUERER QUE AGREGUE UN ITEM SELECCIONADO, POR ESO LO MANDO COMO PARAMETRO
    type : AGREGAR_ITEM,
    item  // ---> SI LA CLAVE SE VA A LLAMAR IGUAL QUE EL VALOR PUEDO ESCRBIRLO UNA SOLA VEZ DIRECTAMENTE. ACA LE ESTOY MANDANDO TODO EL PRODUCTO A AGREGAR
})

export const borrar_Item = ( prodID ) => ({
    type : BORRAR_ITEM,
    prodID // ---> SI LA CLAVE SE VA A LLAMAR IGUAL QUE EL VALOR PUEDO ESCRBIRLO UNA SOLA VEZ DIRECTAMENTE
})

export const confimarCarrito = ( AllProducts, totalPrecio ) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/ordenes.json`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  date: Date.now(),
                  items: { ...AllProducts }, //LO DEESTRUCTURAMOS CON LLAVES PORQUE ES MAS FACIL EN BASE DE DATOS PARA CUANDO LO MANDAMOS COMO JSON
                  theTotal: totalPrecio,
                }),
              });
            
            const resultado = await response.json()

            console.log(resultado)

            dispatch({
                type: CONFIRMAR_CART,
                confirmacion: true
            })

        } catch (error) {
            console.log(error)
        }
    }
}