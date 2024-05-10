import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './src/screens/Login';
import OtpVerification from './src/screens/OtpVerify';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTPVerify" component={OtpVerification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
