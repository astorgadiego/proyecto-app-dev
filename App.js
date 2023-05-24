import { StyleSheet, View,Text } from 'react-native';

import { useState } from 'react';
import { useFonts } from 'expo-font';

// -------------IMPORTS DE MODULOS

import Compra from './src/screens/Compra/Compra';

import Inicio from './src/screens/Inicio/Inicio';
import NavegacionApp from './src/navigation/NavegacionApp';

//-----------------------------------------------------

export default function App() {

  // const [loaded] = useFonts({

  //   "Fuente1": require("../../assets/fonts/Anton-Regular.ttf"),
  //   "Fuente2": require('../../assets/fonts/ShadowsIntoLight-Regular.ttf'),
  //   "Fuente3": require('../../assets/fonts/Mogra-Regular.ttf')

  // });


  const [ acceso, setAcceso ] = useState (false)



  const handlerAcceso = ()=> { 

    setAcceso( true )

  }

  
  // if (!loaded) return null

  let content = <Inicio propAcceso={ handlerAcceso } />;

  if ( acceso ) {

    content=<Compra/>
  
    
  }


  return (

    <NavegacionApp/>
    
  );
}