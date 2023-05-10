import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create( { 

    header: { //viene a reemolazar al inputContainer
        height: 340,
        // marginTop:150,
        paddingHorizontal: 100,
        justifyContent:"center",
    },
    titulo: { //viene a reemplazar al tittleContainer
        fontSize: 40,
        marginTop:150,
        fontWeight: "800",
        justifyContent:"center",
        color: "#1E283C",
        backgroundColor: colors.header,
        alignContent:"center",
        textAlign:"center",
    }

 } )

export default styles