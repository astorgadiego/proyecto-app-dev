import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal } from 'react-native';

import { useState } from 'react';
import { useFonts } from 'expo-font';

// -------------IMPORTS DE MODULOS

import MyModal from './src/components/Modal/MyModal';
import MyHeader from './src/components/Header/';
import MyList from './src/components/Lista/MyList';
import Compra from './src/screens/Compra/Compra';
import MyInput from './src/components/Input/MyInput';
import Inicio from './src/screens/Presentacion/Inicio';

export default function App() {

  const [loaded] = useFonts({

    "ShadowsIntoLight-Regular": require("./src/assets/fonts/ShadowsIntoLight-Regular.ttf")

  });


  const [ acceso, setAcceso ] = useState (false)



  const handlerAcceso = ()=> { 

    setAcceso( true )

  }

  
  if (!loaded) {
    return null;
  }

  let content = <Inicio propAcceso={ handlerAcceso } />;

  if ( acceso ) {
    content=<Compra/>
  }


  return (
    <View style={styles.container}>

      <MyHeader titulo={'Hola Coder! Este es el Proyecto de Diego'} otrosEstilos={styles.headerCointainer}></MyHeader>

      {content}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:10,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
  },
  headerCointainer:{

    fontFamily: "ShadowsIntoLight-Regular"

  },
  inputContainer: {
    marginTop: 30,
    paddingHorizontal: 100,
    justifyContent:"center",
    backgroundColor:"blue"
  },
  tittleContainer: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "500",
    justifyContent:"center",
    color: "#1E283C",
    backgroundColor:"pink",
    alignContent:"center",
    textAlign:"center"
  },
  addItem:{
    height:80,
    width: 400,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor:"yellow"
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: 200,

  },
  button:{
    textAlign:"center",
    width:150,
    flexWrap:"wrap",
    color:"blue"
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
  }
  
});


