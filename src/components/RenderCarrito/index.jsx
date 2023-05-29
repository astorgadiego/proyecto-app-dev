import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import styles from './styles'

import React from 'react'

const MyCarrito = ( { producto, actionDelete } ) => {
  return (
    <View style={styles.item} >
      <View>
        <Text style={styles.header} >{ producto.nombre }</Text>
      </View>
      <View style={styles.detail} >
        <View>
            <Text>Cantidad:{producto.cantidad}</Text>
            <Text>${ producto.precio}</Text>
        </View>
        <TouchableOpacity onPress={ () => actionDelete( producto.id ) } >
        {/* CUANDO SE EJECUTE LA FUNCION ONDELETE LE VOY A MANDAR EL ID DEL PRODUCTO (producto.id) */}
            <Ionicons name='trash' size={24} color={'red'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MyCarrito