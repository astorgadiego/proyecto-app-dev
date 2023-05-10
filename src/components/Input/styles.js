import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({

    inputContainer: {
        marginTop: 30,
        paddingHorizontal: 100,
        justifyContent: "center",
        backgroundColor: "blue"
    },
    addItem: {
        height: 80,
        width: 400,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "yellow"
    },
    input: {
        borderBottomColor: "black",
        borderBottomWidth: 2,
        width: 200,

    },
    button: {
        textAlign: "center",
        width: 150,
        flexWrap: "wrap",
        color: "blue"
    },

})

export default styles