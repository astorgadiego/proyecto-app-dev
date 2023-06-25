import { ADD_PLACE } from '../actions/action_direcciones'

import Place from '../../../Models/Place'

const EstadoIncialDirecciones = {
    
    places : []

}

const ReducerOfDirecciones = ( estado = EstadoIncialDirecciones, action ) => {
    switch (action.type) {
        case ADD_PLACE:

            const newPlace = new Place( Date.now(), action.payload.theLatitude, action.payload.theLongitude )

            console.log('LAPUTALATITUD', newPlace.lat)
            console.log('LAPUTALongitd', newPlace.lng)
            console.log('LAPUTAid', newPlace.id)

            return {...estado, places: estado.places.concat(newPlace)}
        default:
            return estado; 
    }

    
    

}

export default ReducerOfDirecciones