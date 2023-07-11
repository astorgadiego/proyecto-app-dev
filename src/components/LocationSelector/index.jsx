import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import * as Ubicacion from 'expo-location'

import MapPreview from '../MapPreview'

const LocationSelector = ({ onLocation }) => {

    const navigation = useNavigation()

    const [LocacionElegida, setLocacionElegida] = useState() //--> LOCACIONELEGIDA VA A SER UN OBJETO QUE VA A TRAER LATITUD Y LONGITUD


    const VerifyPermissions = async () => {

        const { status } = await Ubicacion.requestForegroundPermissionsAsync() //ESTE ES EL METODO QUE PIDE LOS PERMISOS

        if (status != 'granted') {

            Alert.alert('NO hay permisos', 'Los necesitamos', [{ text: 'Ok' }])
            return false
        }

        return true

    }

    const handleGetLocation = async () => {

        const isUbicactionOk = await VerifyPermissions()

        if (!isUbicactionOk) return

        const location = await Ubicacion.getCurrentPositionAsync() //--> DEVUELVE UN OBJETO

        setLocacionElegida({

            latitud: location.coords.latitude,
            longitud: location.coords.longitude

        })

        onLocation({

            latitud: location.coords.latitude,
            longitud: location.coords.longitude

        })
    }

    return (
        <View style={styles.container} >

            <MapPreview Location={LocacionElegida} newStyles={styles.preview}  >
                <Text>Esperando Ubicacion</Text>
            </MapPreview>

            {/* {LocacionElegida ? ( <Text>{LocacionElegida.latitud}, {LocacionElegida.longitud}</Text> ) : ( <Text>Esperando Ubicacion...</Text> ) } */}

            <Button title='Obtener Ubicacion' color={"#a53860"} onPress={handleGetLocation} />
        </View>
    )
}

export default LocationSelector

const styles = StyleSheet.create({
    container: {
        margin:10,
        width:"50%"
    },
    preview: {
        backgroundColor: "yellow",
        width: "100%",
        height: 200,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        //borderColor: "#f9dbbd",
        borderColor: "red",
        borderWidth: 1,
    }
})