import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font';

import colors from "../../constants/colors";
const styles = StyleSheet.create( { 

    botonNavegacion:{
        backgroundColor:"lightblue",
        margin:20,
        borderRadius:35,
        height:80,
        maxHeight:80,
        width:"80%",
        justifyContent:"center",
        alignItems: 'center',
        shadowOpacity:0.6,
        shadowRadius:10,
        shadowColor:"green"
    },
    textoInicio:{
        fontStyle:"italic",
        fontSize: 15,
        textAlign:"center",
        fontWeight:"bold", 
        color: colors.botonInicio,
    }

 } )

export default styles