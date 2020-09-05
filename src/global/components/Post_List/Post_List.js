import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import style from './style'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather';
import { color1 } from '../../constant/constant'
import Post from '../../../model/post_model';
import { removeLike, getPost } from '../../../firebase/Post';
import { useSelector } from 'react-redux';


const PostList = ({post, action}) => {
    const navigation = useNavigation()


    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('ThePost', {
                    post: post
                })
            }} style={style.containerTouch}>
                <Image source={{ uri: post.image }} style={style.post} />
                <View style={style.textContainer}>                    
                    <Text style={style.textTitle}>{post.title}</Text>
                    <Text style={style.textAuthor}>{post.author}</Text>
                </View>
                <TouchableOpacity onPress={()=>{action(post)}}
                    style={style.iconContainer}>
                    <Icon name={'trash-2'} size={30} color={color1}/>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
}

export default PostList