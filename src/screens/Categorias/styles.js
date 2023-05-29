import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font';

import colors from "../../constants/colors";
const styles = StyleSheet.create( { 

    categoryConteiner: {
        flex:1,
        height:"100%",
        alignItems:"center",
        backgroundColor: "pink", 
        marginBottom: 85, 
        
    },
    
    FlatList:{
        backgroundColor:"pink",
    },

    CategoriaContainer:{
        margin: 10
    },

    botonNavegacion:{
 
        backgroundColor:"lightblue",
        margin:20,
        borderRadius:35,
        height:80,
        maxHeight:80,
        width:"80%",
        justifyContent:"center",
        alignItems: 'center',
        alignSelf:"center",
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