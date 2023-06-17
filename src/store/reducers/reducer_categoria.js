//ESTE ES MI ESTADO GLOBAL DE LAS CATEGORIAS
import categories from "../../data/categories";

import { ELECCION_CATEGORIA } from "../actions/action_categoria";

const EstadoInicialCategorias = {
    theCategorias: categories,//---> ACA DEBERIA LOS DATOS DESDE UNA BASE DE DATOS, POR AHORA LO HACES DESDE DATA
    CategoriaSeleccionada: null //---> ACA ALMACENA LA CATEGORIA SELECCIONADA. PARA PODER ACCEDER A ELLA DE FORMA GLOBAL
}

const ReducerOfCategoria = ( estado = EstadoInicialCategorias, action )=>{ //--> FUNCION REDUCER

    //ACA DENTRO VA TODA LA LOGICA QUE ACTUALIZA MI ESTADO ACTUAL DE LAS CATEGORIA MEDIANTE EL ACTION. Y DEVUELVE EL ESTADO MODIFICADO

    switch (action.type) {
        case ELECCION_CATEGORIA : 
                const Indice_De_Categoria = estado.theCategorias.findIndex ( cat => cat.id === action.IdOfCategory ) //---ZHAGO LA LOGICA PARA FILTRAR POR LA CATEGORIA SELECCIONADA
                if ( Indice_De_Categoria === -1 ) return estado
                return {...estado, CategoriaSeleccionada : estado.theCategorias[Indice_De_Categoria] }
        default:
            return estado
    }
    
}

export default ReducerOfCategoria