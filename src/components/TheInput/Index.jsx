import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useReducer } from 'react'

import styles from './styles'

const INPUT_CHANGE = 'INPUT_CHANGE'
const INPUT_BLUR = 'INPUT_BLUR'

//REACTNATIVE TIENE UN REDUX PROPIO DE FORMA NATIVA

const ReducerOfInput = ( estado, action ) => {
    switch (action.type) {
        case INPUT_CHANGE:

            return { ...estado, valorDeEstadoInicial: action.value, stateValid: action.validacion }

        case INPUT_BLUR:
            return { ...estado, elegido: true }
        default:
            break;
    }
}

//---------------------------------------------------------------------------------------------------------

const TheInput = ({ ValorInicial, inicialmenteValido, onInputChange, id, required, email, maxCaracteres, minCaracteres, label, MensajeError, ...props }) => {

    const [ inputState, dispatchInputState ] = useReducer( ReducerOfInput, { //-->ESTA ES MI FUNCION REDUCTORA, LO QUE DESESTRUCTURO ENTRE CORCHETES ES DEL REDUCER NATIVO DE RACT

        valorDeEstadoInicial: ValorInicial ? ValorInicial : '', stateValid: inicialmenteValido, elegido: false //-->ESTE ES EL ESTADO INCIAL QUE LE MANDO AL REDUCER
    })

    useEffect( () => {

        onInputChange( id, inputState.valorDeEstadoInicial, inputState.stateValid )

    }, [ inputState, onInputChange, id ]) //--> SE VA A ACTUALIZAR CADA VEZ QUE UNO DE ESTOS TRES CAMBIE.


    const textChangeHandler = ( textoIngresado ) => { //--> FUNCION QUE VALIDA LO QUE ESTE ESCRIBIENDO EN EL INPUT

        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        let esValido = true

        if (required && textoIngresado.trim().length === 0) { //--> EL TRIM ELIMINA LOS ESPACIOS EN BALNCO DEL PRINCIPIO Y DEL FINAL
            esValido = false
        }

        if (email && !emailRegex.test(textoIngresado.toLowerCase())) { //--> SIE EL EMAIL NO CUNPLE CON LO DEL REGEX DEVOLVEMOS FALSO
            esValido = false
        }

        if (maxCaracteres && textoIngresado.length > maxCaracteres) {
            esValido = false
        }
        if (minCaracteres !== null && textoIngresado.length < minCaracteres) {
            esValido = false
        }

        dispatchInputState({

            type: INPUT_CHANGE,
            value: textoIngresado,
            validacion: esValido

        })
    }

    const onBlurHandler = () => dispatchInputState( { type: INPUT_BLUR } )


    return (

        <View style={{backgroundColor:"lightblue"}}>

            <Text style={{marginVertical: 8}} > {label} </Text>
            <TextInput
                style={{backgroundColor:"white", margin: 10, width:"50%", paddingHorizontal: 2, paddingVertical: 5,borderBottomColor: "#ccc", borderBottomWidth: 1,}}
                value={inputState.valorDeEstadoInicial}
                onChangeText={ textChangeHandler }
                onBlur={ onBlurHandler }
                {...props}
            />
            { !inputState.stateValid && inputState.elegido && (  //---> EN CASO DE NO ENCONTRARSE USUARIO, MOSTRAR ESTE MENSAJE DE ERROR
                <View>
                    <Text style={{color:"red"}} >{MensajeError}</Text>
                </View>
             )}

        </View>
    )
}   

export default TheInput