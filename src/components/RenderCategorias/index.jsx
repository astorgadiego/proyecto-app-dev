import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import styles from './styles'

const MyCategories = ({ theCategory, onCategorySelected }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={ () => onCategorySelected( theCategory )} >
            <View>
                <Text style={styles.Titulo}>{theCategory.titulo}</Text>
            </View>
            <View style={{backgroundColor:"green",justifyContent:"center", alignItems:"center", }}>
                <Image style={styles.image} source={theCategory.img} />
            </View>

        </TouchableOpacity>

    )
}

export default MyCategories
