import { StyleSheet, View } from 'react-native';

import { useState } from 'react';
import { useFonts } from 'expo-font';

// -------------IMPORTS DE MODULOS

import MyHeader from './src/components/Header/';

import Compra from './src/screens/Compra/Compra';

import Inicio from './src/screens/Presentacion/Inicio';
//-----------------------------------------------------

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
    alignItems: 'center', //ESTA PROPIEDAD ES MUY IMPORTANTE PARA CENTRAR LAS COSAS
  },
  headerCointainer:{

    fontFamily: "ShadowsIntoLight-Regular"

  },

});