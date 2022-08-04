import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import LoginPages from './pages/LoginPages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "LoginPages" component={LoginPages}  options={{headerShown:false}}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
