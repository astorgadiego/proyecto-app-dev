import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"

import styles from './styles'

const ItemInCart = () => {
  return (
    <View>
      <View>
        <Text>Nombre</Text>
      </View>
      <View>
        <View>
          <Text>Cantidad</Text>
          <Text>Precio</Text>
        </View>
      </View>
      <TouchableOpacity onPress={ ()=> console.log('first') } >
          <Ionicons name='trash' size={24} color={'red'} />
      </TouchableOpacity>
    </View>
  )
}

export default ItemInCart