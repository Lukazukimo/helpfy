import React from 'react'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import ThePost, { title } from '../screens/ThePost/ThePost';
import Feed from '../screens/Feed/Feed'
import Search from '../screens/Search/Search'
import { color1, color2, styleTitle } from '../global//constant/constant'
import { Button, TextInput } from 'react-native';
import AddPost from '../screens/Add_Post/AddPost'
import Category from '../screens/Category/Category';

const Stack = createStackNavigator();

export function StackFeed() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
            <Stack.Screen name="ThePost" component={ThePost}
                options={{
                    title: title,
                    headerStyle: {
                        backgroundColor: color1,
                    },
                    headerTintColor: color2,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styleTitle,
                }} />
            <Stack.Screen name='Search' component={Search} />
            <Stack.Screen name='AddPost' component={AddPost}
                options={{
                    title: 'Nova Postagem',
                    headerStyle: {
                        backgroundColor: color1,
                    },
                    headerTintColor: color2,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styleTitle,
                }} />
            <Stack.Screen name='Category' component={Category} 
                options={{                    
                    headerStyle: {
                        backgroundColor: color1,
                    },
                    headerTintColor: color2,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styleTitle,
                }} />
        </Stack.Navigator>
    )
}