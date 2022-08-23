import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import TasksScreen from './src/screens/TasksScreen';
import TaskDetailsScreen from './src/screens/TaskDetailsScreen';
import TaskTrackerScreen from './src/screens/TaskTrackerScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TasksScreen"
          component={TasksScreen}
          options={{
            headerShown: false,
            headerLeft: null,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="TaskDetailsScreen"
          component={TaskDetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TaskTrackerScreen"
          component={TaskTrackerScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
