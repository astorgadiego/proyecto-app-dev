import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

import MyInput from '../../components/Input/MyInput'
import MyList from '../../components/Lista/MyList'
import MyModal from '../../components/Modal/MyModal'

import styles from './styles'



const Compra = () => {

    const [ textItem, settextItem ] = useState( "" )

    const [ list, setlist ] = useState( [] )
  
    const [ itemSelected , setItemSelected] = useState ( {} ) //CADA ITEM ES UN OBJETO
  
    const [modalVisible, setModalVisible ] = useState ( false )
  
    
      const addItemtoList = (  ) => { 
    
        setlist( loqueestabantes => [...loqueestabantes, {nombre: textItem, id: Math.random().toString() }] )  //----> ES MUY IMPORTANTE EL SPREAD OPERATOR PARA CONSERVAR LOS ITEMS ANTERIORES Y LUEGO AGEGAR EL NUEVO
   
   
       settextItem("")
   
     }
    
     const renderItem = ( {item} ) => ( //VA ENTRE PARENTESIS DEVUELVE UN COMPONENTE. RETURN IMPLICITO
    <View style={styles.ItemStyle} >
      <Text style={{ color:"blue"}}> {item.nombre} </Text>
      <Button 
        title='Edit' 
        onPress={ () => onHandleModal( item )  }
        color={'violet'} 
      />
    </View> 
   )

   const onHandleModal = (item) => { 
    console.log('Setea el item del modal') 
    setItemSelected( item )
    setModalVisible(true)

  }

   const onHandleDelete = item => { 

    console.log(item);
    setlist( loqueestabantes => loqueestabantes.filter( (element) => element.nombre !== item.nombre ) )
    setModalVisible( !modalVisible )

  }


  return (
    <View style={styles.pantallaContainer} >

        <MyInput
          actionTextChange={ settextItem }
          theItem={ textItem }
          actionAddToList={ addItemtoList }
        />

        <MyList
          theList={list}
          actionRender={renderItem}
        />


        <MyModal
          propisVisible={modalVisible}
          actionDeleteItem={() => onHandleDelete(itemSelected)}
          itemSelected={itemSelected}
        />
      </View>
  )
}

export default Compra