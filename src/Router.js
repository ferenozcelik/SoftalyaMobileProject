import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import LoginPages from './pages/LoginPages/LoginPages';
import TaskPage from './pages/TaskPage/TaskPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailPages from './pages/DetailPages/DetailPages';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPages"
          component={LoginPages}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TaskPage"
          component={TaskPage}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="DetailPages"
          component={DetailPages}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
