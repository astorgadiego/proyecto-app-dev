import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './styles'

const MyInput = ({ actionTextChange, theItem, actionAddToList }) => {
    return (

        <View style={styles.inputContainer} >
            <View style={styles.addItem} >
                <TextInput
                    placeholder='INGRESE UN ITEM'
                    style={styles.input}
                    onChangeText={ actionTextChange } //ESTE ES EL EVENTO QUE DETECTA CUANDO EL USUARIO ESCRIBE ALGO EN TEXTINPUT. ENVIA COMO PARAMETRO LO QUE ESCRIBA EL USER
                    value={ theItem }  //ACA DEFINO QUE EL VALOR DEL TEXT INPUT SEA EL ESTADO DE MI FUNCION    
                />


                <TouchableOpacity onPress={ () => actionAddToList() } >
                    <Text style={styles.button} >Presiona aca para agregar el producto!!</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default MyInput