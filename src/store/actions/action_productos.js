export const ELECCION_PRODUCTO = "ELECCION_PRODUCTO"

export const PRODUCTOS_FILTRADOS = "PRODUCTOS_FILTRADOS"

//DEBEMOS CREAR UNA FUNCION PARA CADA FUNCION 

export const elegirProducto = idProduct => ({ //--> LE VAMOS A ENVIAR COMO PARAMETRO EL ID DEL PRODUCTO SELECCIONADO POR EL USER.
    type: ELECCION_PRODUCTO,
    IDofProducto : idProduct
})

export const filtrarProductos = idCategory => ({
    type: PRODUCTOS_FILTRADOS,
    IdOfCategoria: idCategory
})
