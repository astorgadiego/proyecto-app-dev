import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create( { 

    botonInicio: {
        backgroundColor:"orange",
        margin:20,
        borderRadius:"35%",
        height:80,
        width:"100%", 
        justifyContent:"center",
        alignItems: 'center',
    },
    textoInicio:{
        fontStyle:"italic",
        fontSize: 15,
        textAlign:"center",
        fontWeight:"bold", 
        color: colors.botonInicio
    }

 } )

export default styles