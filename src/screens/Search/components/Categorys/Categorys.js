import React, { useState } from 'react'
import { FlatList, TouchableOpacity, Image, Text, View } from 'react-native'
import style from './style'
import { categorys } from '../../../../global/constant/constant'
import { useNavigation } from '@react-navigation/native'

const Categorys = (props) => {
    const [category, setCategory] = useState(categorys)
    const navigation = useNavigation()

    return(
        <FlatList numColumns={2}
            data={category}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => {
                return (
                    <View style={style.container}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Category')
                        }}>
                            <Image source={item.image} style={style.iconCateogry} />
                            <Text style={style.textCategory}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )
            }}
        />
    )
}

export default Categorys
