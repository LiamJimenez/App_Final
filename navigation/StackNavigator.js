import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen from '../screens/Inicio';
import DetallesEventoScreen from '../screens/DetallesEvento';
import AcercaDeScreen from '../screens/AcercaDe';
import AgregarEventoScreen from '../screens/AgregarEvento';
import ConsultaDirector from '../screens/ConsultaDirector'
import ConsultaDirectorScreen from '../screens/ConsultaDirector';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={InicioScreen} />
      <Stack.Screen name="DetallesEvento" component={DetallesEventoScreen} />
      <Stack.Screen name="AcercaDe" component={AcercaDeScreen} />
      <Stack.Screen name="AgregarEvento" component={AgregarEventoScreen} />
      <Stack.Screen name="ConsultaDirector" component={ConsultaDirectorScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;
