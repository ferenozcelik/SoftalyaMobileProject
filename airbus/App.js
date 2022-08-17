import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/pages/Login";
import Task from "./src/pages/Task";
import Detail from "./src/pages/Detail";
import Detail4 from "./src/pages/Detail4";

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:true}}>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Task" component={Task}  options={{headerShown:false}}/>
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Detail4" component={Detail4} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;