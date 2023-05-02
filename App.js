import { StyleSheet, Text, View, Image, TextInput, Button, FlatList, TouchableOpacity, Modal } from 'react-native';

import { useState } from 'react';


export default function App() {

  const [ textItem, settextItem ] = useState( "" )

  const [ list, setlist ] = useState( [] )

  const [ itemSelected , setItemSelected] = useState ( {} ) //CADA ITEM ES UN OBJETO

  const [modalVisible, setModalVisible ] = useState ( false )

  const handleTextChange = text => {   //RECIBE COMO PARAMETRO EL TEXTO QUE EL USUARIO VA A ESCRIBIR EN EL TEXTINPUT

    settextItem( text )
    console.log(text);
    
  }

  const addItemtoList = (  ) => { 
    
     setlist( loqueestabantes => [...loqueestabantes, {nombre: textItem, id: Math.random().toString() }] )  //----> ES MUY IMPORTANTE EL SPREAD OPERATOR PARA CONSERVAR LOS ITEMS ANTERIORES Y LUEGO AGEGAR EL NUEVO


    settextItem("")

  }

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



  const renderItem = ( {item} ) => ( //VA ENTRE PARENTESIS DEVUELVE UN COMPONENTE. RETURN IMPLICITO
    <View style={styles.ItemStyle} >
      <Text> {item.nombre} </Text>
      <Button 
        title='Edit' 
        onPress={ () => onHandleModal( item )  }
        color={'violet'} 
      />
    </View> 
   )


  return (
    <View style={styles.container}>

      <View style={ styles.inputContainer } >

        <Text style= { styles.tittleContainer } >Hola Coder! Este es el Proyecto de Diego</Text>
        <View style ={ styles.addItem } >
          <TextInput 
              placeholder='INGRESE UN ITEM' 
              style={ styles.input } 
              onChangeText={ handleTextChange } //ESTE ES EL EVENTO QUE DETECTA CUANDO EL USUARIO ESCRIBE ALGO EN TEXTINPUT. ENVIA COMO PARAMETRO LO QUE ESCRIBA EL USER
              value= {textItem}  //ACA DEFINO QUE EL VALOR DEL TEXT INPUT SEA EL ESTADO DE MI FUNCION    
          />


          <Button title='Presiona aca para agregar el producto!!!!' onPress={ addItemtoList } />
        </View>
      </View>

      <View style={styles.listContainer} >

        <Text>Aca debajo va la lista de lo que voy agregando</Text>
        <FlatList
          data={ list }  //----RECIBE EL ESTADO DE MI LISTA. SE ENVIA EN LA FUNCION "RENDER ITEM" 
          renderItem={ renderItem } //----ACA VA LA FUNCION QUE DEFINE COMO QUIERO QUE SE VEA MIS ITEMS
          keyExtractor=  { item => item.id } //EXTRAE LA KEY DEL ARRAY Y SE LA ASIGNA A CADA ITEM 
        
        />
      </View>
      <View>
        <Modal visible = { modalVisible } animationType='slide' transparent={false} >
            <View style={styles.modalContainer} >
              <Text>El Modal</Text>
            
              <View>
                <Text>¿Queres Borrar Este Elemento?</Text>
                <Text>{ itemSelected.nombre }</Text>
              </View>
              <View>
                <Button 
                  title='Eliminar' 
                  color={'red'} 
                  onPress={ () => onHandleDelete ( itemSelected ) } 
                />
              </View>

            </View>
        </Modal>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:200,
    backgroundColor: '#E7EAF2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,

  },
  tittleContainer: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "500",
    color: "#1E283C",
  },
  addItem:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: 200,
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 20,
    padding: 3,
  },
  ItemStyle :{

    height: 60,
    flexDirection: "row",
    marginBottom: 25,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
  modalContainer : {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'

  }
});


