import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen from '../screens/Inicio';
import DetallesEventoScreen from '../screens/DetallesEvento';
import AcercaDeScreen from '../screens/AcercaDe';
import AgregarEventoScreen from '../screens/AgregarEvento';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={InicioScreen} />
      <Stack.Screen name="DetallesEvento" component={DetallesEventoScreen} />
      <Stack.Screen name="AcercaDe" component={AcercaDeScreen} />
      <Stack.Screen name="AgregarEvento" component={AgregarEventoScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;
