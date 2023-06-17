import { CLAVE_API_SIGN_UP } from "../../constants/database";

export const HACER_REGISTRO = 'HACER_REGISTRO'

export const Registrarse = ( email, contrasena ) => {

    console.log(email, contrasena)

    return async dispatch =>{
        try {
            const response = await fetch( CLAVE_API_SIGN_UP, {
                method: 'POST',
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify( {
                    email: email,
                    password: contrasena,
                    SecureToken: true
                } )
            } );
            const data = await response.json()
            console.log(data);
            dispatch({
                type: HACER_REGISTRO,
                token: data.idToken,  //---> "idToken y localId" SON DATOS QUE NOS VA A ENVIAR FIREBASE, no se pueden llamar diferentes
                userId: data.localId //--> SI TODO SALE BIEN ESTO ES LO QUE ME DEVUELVE FIREBASE
            })
            
        } catch (error) { 
            console.log(error)
        }
    }
}