import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../login/login';
import Home from '../home/home';
import Details from '../details/details';

import { RootStackParamList } from './rootList';

const RootStack = createStackNavigator<RootStackParamList>();

export default function Routes() {
    return (
        <RootStack.Navigator 
            initialRouteName="Login"  
            screenOptions={{
                headerShown: false
            }}
        >
            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="Details" component={Details} />
        </RootStack.Navigator>
  );
}