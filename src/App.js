import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/Login';
import Task from './pages/Task';
import TaskDetail from './pages/TaskDetail';
import TaskTracker from './pages/TaskTracker';
const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="TaskPage" component={Task} />
        <Stack.Screen name="TaskDetailPage" component={TaskDetail} />
        <Stack.Screen name="TaskTrackerPage" component={TaskTracker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
