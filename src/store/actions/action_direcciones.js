//import * as FileSystem from "expo-file-system";

export const ADD_PLACE = "ADD_PLACE";

export const addPlace = ( ubicacion ) => (
    {
        type: ADD_PLACE,
        payload: { 
            theLatitude: ubicacion.latitud,
            theLongitude: ubicacion.longitud
         }
    }
)