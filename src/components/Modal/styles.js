import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create( { 

    modalContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    
      },
    textItem : {
        textAlign:"center"
    },
    delete_Button : {
      color: colors.botonEliminar
    }

 } )

export default styles