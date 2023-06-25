import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

const Direcciones = () => {

  const dispatchFromRedux = useDispatch()

  const UbicacionesFromReducer = useSelector(estado => estado.globalDirecciones.places)

  const renderUbicaciones = ({ item }) => (
    <TouchableOpacity style={{backgroundColor:"#FC7153", margin:10}} onPress={()=>console.log('IR AL DETALLE DE LA UBICACION')} >
      <Text>USTED VIVE EN LAS SIGUIENTES COORDENADAS.</Text>
      <Text>ID: {item.id}</Text>
      <Text>Latitud: {item.lat}</Text>
      <Text>Longitud:{item.lng}</Text>
    </TouchableOpacity>
  )

  return (
    <View>

      <View style={{backgroundColor:"yellow"}}>
        <Text>AVA DEBAJO VAN LAS DIRECCIONES GUARDADAS</Text>
      </View>
      <FlatList
        data={UbicacionesFromReducer}
        renderItem={renderUbicaciones}
        keyExtractor={ubi => ubi.id}

      />
    </View>
  )
}

export default Direcciones