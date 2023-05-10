import { Text, View , Modal, Button, TouchableOpacity} from 'react-native'
import React from 'react'

import styles from './styles'

const MyModal = ( { propisVisible ,actionDeleteItem, itemSelected } ) => {
  return (

      
          <Modal visible={ propisVisible } animationType='slide' transparent={false} >
              <View style={styles.modalContainer} >
                  <Text>El Modal</Text>

                  <View>
                      <Text>¿Queres Borrar Este Elemento?</Text>
                      <Text style={styles.textItem} >{itemSelected.nombre}</Text>
                  </View>
                  <View>
                      <TouchableOpacity  onPress={ () => actionDeleteItem( ) }>
                            <Text style={styles.delete_Button}>Eliminar</Text>
                      </TouchableOpacity>
                      {/* <Button
                          title='Eliminar'
                          color={'red'}
                          onPress={() => actionDeleteItem( ) }
                      /> */}
                  </View>

              </View>
          </Modal>
      

  )
}

export default MyModal