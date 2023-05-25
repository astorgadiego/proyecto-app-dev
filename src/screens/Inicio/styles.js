import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


const styles = StyleSheet.create( { 

    InicioContainer:{
        flex:1,
        backgroundColor:"lightgreen",
        alignItems:"center",
        justifyContent:"center"
    },
    botonNavegacion:{
        backgroundColor:"orange",
        margin:20,
        borderRadius:35,
        height:80,
        maxHeight:80,
        width:"80%",
        justifyContent:"center",
        alignItems: 'center',
        shadowOpacity:20,
        shadowRadius:20
    },
    textoInicio:{
        fontStyle:"italic",
        fontSize: 15,
        textAlign:"center",
        fontWeight:"bold", 
        color: colors.botonInicio,
        fontFamily:"Fuente1"
    },



    botonInicio: {
        backgroundColor:"orange",
        margin:20,
        borderRadius:35,
        height:80,
        width:"100%", 
        justifyContent:"center",
        alignItems: 'center',
    },
    
    

 } )

export default styles