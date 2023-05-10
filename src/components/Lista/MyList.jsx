import { View, Text , FlatList } from 'react-native'
import React from 'react'

import styles from './styles'

const MyList = ( { theList, actionRender } ) => {
  return (
    <View style={styles.listContainer} >

        <Text  style={ {...styles.tittleList, color:"white"  } }>Aca debajo va la lista de lo que voy agregando</Text>
        <FlatList
          data={ theList }  //----RECIBE EL ESTADO DE MI LISTA. SE ENVIA EN LA FUNCION "RENDER ITEM" 
          renderItem={ actionRender } //----ACA VA LA FUNCION QUE DEFINE COMO QUIERO QUE SE VEA MIS ITEMS
          keyExtractor=  { item => item.id } //EXTRAE LA KEY DEL ARRAY Y SE LA ASIGNA A CADA ITEM 
        
        />
      </View>
  )
}

export default MyList