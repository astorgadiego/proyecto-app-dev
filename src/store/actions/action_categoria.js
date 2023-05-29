//EXPORTAMOS UNA CONSTANTE CON EL NOMBRE DE LA ACCION QUE QUERMOS EJECUTAR

export const ELECCION_CATEGORIA = "ELECCION_CATEGORIA"

export const elegirCategoria = IdCategory => ({

    type: ELECCION_CATEGORIA,
    IdOfCategory: IdCategory

})