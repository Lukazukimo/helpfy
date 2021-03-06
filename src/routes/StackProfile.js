import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Edit from '../screens/Edit/Edit';
import Profile from '../screens/Profile/Profile'
import MyPosts from '../screens/MyPosts/MyPosts'
import { color1, color2, styleTitle } from '../global/constant/constant';
import Rating from '../screens/Rating/Rating';
import ChangePassword from '../screens/Change_Password/ChangePassword'

const Stack = createStackNavigator();

export function StackProfile() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="Edit" component={Edit} options={{ headerShown: false }} />
            <Stack.Screen name="Rating" component={Rating} 
                options={{
                    title: 'Avaliação',
                    headerStyle: {
                        backgroundColor: color2,
                    },
                    headerTintColor: color1,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styleTitle,
                }} />
            <Stack.Screen name="MyPosts" component={MyPosts}
                options={{
                    title: 'Posts Realizados',
                    headerStyle: {
                        backgroundColor: color2,
                    },
                    headerTintColor: color1,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styleTitle,
                }} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}