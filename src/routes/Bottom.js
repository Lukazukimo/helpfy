import React from 'react'
// import Feed from '../screens/Feed/Feed';
import Profile from '../screens/Profile/Profle';
import Chat_List from '../screens/Chat_List/Chat_List';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackFeed } from './StackFeed'
// import StackLogin from './StackLogin';

const Tab = createBottomTabNavigator(); 

export function Bottomnavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={StackFeed} />
            <Tab.Screen name="Profile" component={Profile} />            
            <Tab.Screen name="Chat" component={Chat_List} />
        </Tab.Navigator>
    )
}