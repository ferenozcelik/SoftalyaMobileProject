import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPages from './Pages/LoginPages/LoginPages';
import TaskPages from './Pages/TaskPages/TaskPages';
import DetailPages from './Pages/DetailPages/DetailPages';
import TaskDetail from './Pages/TaskDetail.js/TaskDetail';

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
          name="TaskPages"
          component={TaskPages}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="DetailPages"
          component={DetailPages}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="TaskDetail"
          component={TaskDetail}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
