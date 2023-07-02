import { ADD_PLACE,CARGAR_DIRECCION } from '../actions/action_direcciones'

import Place from '../../Models/Place'

const EstadoIncialDirecciones = {
    
    places : []

}

const ReducerOfDirecciones = ( estado = EstadoIncialDirecciones, action ) => {
    switch (action.type) {
        case ADD_PLACE:

            const newPlace = new Place( Date.now(), action.payload.theLatitude, action.payload.theLongitude, action.payload.theDireccion )

            console.log('LABENDITALATITUD', newPlace.lat)
            console.log('LABENDITALongitd', newPlace.lng)
            console.log('LABENDITAid', newPlace.id)
            console.log('LABENDITADIRECCION:', newPlace.adress)

            return {...estado, places: estado.places.concat(newPlace)}
        default:
            return estado; 

        case CARGAR_DIRECCION:

            return { ...estado, places: action.lugares.map( item => new Place( item.id.toString(),item.latitud,item.longitud,item.direccion ) ) }//--> EN CADA ITERACION DEL MAP HAGO UNA INSTANCIA DE MI CLSE 
    }                                                                                                                                            //Y LE MANDO LAS FILAS DE MI TABLA DE LA BASE DE DATOS    

    
    

}

export default ReducerOfDirecciones