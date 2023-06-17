import { Alert, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, } from 'react-native'

import React, { useCallback, useEffect, useReducer, useState, } from 'react'

import TheInput from '../../components/TheInput/Index'

import { Registrarse } from '../../store/actions/action_auth'

import { useDispatch } from 'react-redux'

import styles from './styles'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (estado, action) => { //---> ESTA ES MI FUNCION REDUCER QUE DESPUES TENGO QUE MANDAR EN EL USEREDUCER
    console.log('ACTION', action)
    if (action.type === FORM_INPUT_UPDATE) {

        const ValoresActualizados = {
            ...estado.inputValues,
            [action.input]: action.value,
        }

        const updatedValidities = {
            ...estado.inputValidities,
            [action.input]: action.validacion
        }

        let updatedFormIsValid = true

        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
        }

        return {
            inputValues: ValoresActualizados,
            inputValidities: updatedValidities,
            formIsValid: updatedFormIsValid
        };

    }

    return estado
}

const Auth = () => {

    const dispatchFromRedux = useDispatch()

    const [error, setError] = useState(null)

    useEffect(() => {

        if (error) {
            Alert.alert('Ha Ocurrido un Error, companero', error, [{ text: "Ok" }]);
        }

    }, [error]) //CADA VEZ QUE EL ESTADO DE ERROR DE ACTUALICE O MODIFIQUE

    //REDUCER NATIVO CON EL FORMULARIO
    const [formState, dispatchFormState] = useReducer(formReducer,
        {
            inputValues: {
                email: "",
                password: ""
            },
            inputValidities: {
                email: false,
                password: false
            },
            formIsValid: false
        }
    ) //---> ENTRE LOS PARENTESIS DEL USEreducer, le mandamos mi funcion reducer. Y MI ESTADO INICIAL


    const handleSignUp = () => {
        //dispatchFromRedux( Registrarse( email, contrasena ) ) 
        //console.log('ME REGISTRE!!')
        if (formState.formIsValid) { //--> EL FORMSTATE ES EL ESTADO DE MI REDUCER. VALIDAMOS QUE LO ESCRITO ESTE BIEN ESCRITO

            dispatchFromRedux(Registrarse(formState.inputValues.email, formState.inputValues.password)) //---> LE TENGO QUE MANDAR EL EMAIL Y PASSWORD INGRESADOS

        } else {
            Alert.alert('Formulario Invalido', "Ingrese un Mail y Password Validos.", [{ text: 'Ok' }])
        }
    }

    const onInputChangeHandler = useCallback((inputIdentifier, valorDelInput, inputValidity) => {

        console.log(inputIdentifier, valorDelInput, inputValidity)

        dispatchFormState({

            type: FORM_INPUT_UPDATE,
            value: valorDelInput,
            validacion: inputValidity,
            input: inputIdentifier

        });
    },

        [dispatchFormState]
    )

    return (
        // ESTE COMPONENTE ES PARA QUE CUANDO ABRAMOS EL TECLADO NO NOS TAPE NADA
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: "lightgreen", }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={50}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}  >
                <View style={{ backgroundColor: "orange",  paddingTop: 100, flex: 1,alignItems: "center",}} >
                    <View style={{ alignItems:"center" }} >
                        <Text style={{fontFamily: "Fuente3"}} >Bienvenido a San Telmo Food</Text>
                        <Text style={{fontFamily: "Fuente3"}} >Inicie Sesion o Registrese con una Nueva Cuenta</Text>
                    </View>
                    <View style={{width:"90%", backgroundColor:"red",marginTop:50}}>
                        <TheInput

                            id="email"
                            label="Email"
                            keyboardType="email-address"
                            required
                            email
                            autoCapitalize="none"
                            MensajeError={'Porfa, ingresa un mail valido'}
                            onInputChange={onInputChangeHandler}
                            ValorInicial=""

                        />
                        <TheInput

                            id="password"
                            label="Password"
                            keyboardType="default"
                            required
                            password
                            secureTextEntry
                            autoCapitalize="none"
                            MensajeError={'Porfa, ingresa una contrasenia valida'}
                            onInputChange={onInputChangeHandler}
                            ValorInicial=""

                        />
                    </View>
                    <View style={{ marginTop: 42,width: "90%",backgroundColor:"violet" }}>
                        <TouchableOpacity style={{ backgroundColor: "yellow", margin:10 }} onPress={handleSignUp} >
                            <Text>REGISTRARSE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "white", margin:10 }} onPress={() => console.log("INICIE SESION!!")} >
                            <Text>INICIAR SESION</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Auth