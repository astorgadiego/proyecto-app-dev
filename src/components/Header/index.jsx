import { Text, View } from 'react-native'
import React from 'react'

import styles from './styles'

const MyHeader = ( { titulo, otrosEstilos } ) => {
  return (
    
      <Text style={ {...styles.titulo, ...otrosEstilos } } > { titulo } </Text>
    
  )
}
 
export default MyHeader
