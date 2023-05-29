import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({

    container:{ 
        backgroundColor: "red", 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-evenly", 
        borderRadius: 30, 
        elevation: 10, 
        shadowColor: "blue", 
        shadowOpacity: 0.5, 
        shadowRadius: 10, 
        width: "95%" 
    },
    textContainer: {
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",

    },
    Titulo: {
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "italic",
    },
    imageContainer: {
        width: "50%",
        height: "100%"
    },
    image: {
        width: 120,
        height: 80,
    }

})

export default styles