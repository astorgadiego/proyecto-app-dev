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
  
    const [ acceso, setAcceso ] = useState (false)

    const handleTextChange = text => {   //RECIBE COMO PARAMETRO EL TEXTO QUE EL USUARIO VA A ESCRIBIR EN EL TEXTINPUT

        settextItem( text )
        console.log( text );
        
      }
    
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
    // setlist( loqueestabantes => loqueestabantes.filter( (element) => element !== id ) )
    setlist( loqueestabantes => loqueestabantes.filter( (element) => element.nombre !== item.nombre ) )
    setModalVisible( !modalVisible )

  }


  return (
    <View style={styles.pantallaContainer} >
        <View style={styles.inputContainer} >
          <View style={styles.addItem} >
            <TextInput
              placeholder='INGRESE UN ITEM'
              style={styles.input}
              onChangeText={handleTextChange} //ESTE ES EL EVENTO QUE DETECTA CUANDO EL USUARIO ESCRIBE ALGO EN TEXTINPUT. ENVIA COMO PARAMETRO LO QUE ESCRIBA EL USER
              value={textItem}  //ACA DEFINO QUE EL VALOR DEL TEXT INPUT SEA EL ESTADO DE MI FUNCION    
            />


            <TouchableOpacity onPress={addItemtoList} >
              <Text style={styles.button} >Presiona aca para agregar el producto!!</Text>
            </TouchableOpacity>
          </View>

        </View>

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