//import * as FileSystem from "expo-file-system";
import Map from "../../constants/Map";
import { fetchDireccion, insertDireccion } from "../../db";

export const ADD_PLACE = "ADD_PLACE";

export const CARGAR_DIRECCION = "CARGAR_DIRECCION"

export const addPlace = ( ubicacion ) => { 

    return async dispatch => {
        
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${ubicacion.latitud},${ubicacion.longitud}&key=${Map.API_KEY_MAP}`) //--> ESTE ES EL LLAMADO A LA API DE GOOGLE PARA QUE ME DEVUELVA LA DIRECCION EXACTA
        
        if (!response.ok) {
                throw new Error("No se ha podido comunicar con Google Maps"); //--> FALLA EN EL LLAMADO
        }
        
        const resData = await response.json();

        if (!resData.results) { //--> SI INVENTE UNA DIRECCION FALSA
            throw new Error(
              "No se han encontrado los datos para las coordenadas seleccionadas"
            );
        }
        
        console.log('EL LLAMADO A LA API SALIO BIEN',resData);

        const direccion_exacta = resData.results[0].formatted_address; //--> ESTE METODO LO FORMATEA EN FORMATO TEXTO, LEGIBLE

        //-------------------------------------------------------------------

        // const fileName = image.split("/").pop();
        // const Path = FileSystem.documentDirectory + fileName;

        try {

            // FileSystem.moveAsync({
            //     from: image,
            //     to: Path,
            //   });

            const result = await insertDireccion( ubicacion.latitud, ubicacion.latitud, direccion_exacta )

            console.log("DIRECCION EN BASE DE DATOS:", result)
            
            
            dispatch (
            {
                type: ADD_PLACE,
                payload: { 
                    theLatitude: ubicacion.latitud,
                    theLongitude: ubicacion.longitud,
                    theDireccion: direccion_exacta,
                }
            }
        )
            
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }
}

export const cargarDireccion = () => {
    return async (dispatch) => {
        try {
            const result = await fetchDireccion()
            console.log('SE OBTUVO LA DIRECCION DE LA BASE DE DATOS:',result)
            dispatch( {type: CARGAR_DIRECCION, lugares: result.rows._array })
        } catch (error) {
            throw error
        }
    }
} 