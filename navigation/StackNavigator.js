import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen from '../screens/Inicio';
import DetallesEventoScreen from '../screens/DetallesEvento';
import AcercaDeScreen from '../screens/AcercaDe';
import AgregarEventoScreen from '../screens/AgregarEvento';
import ConsultaDirectorScreen from '../screens/ConsultaDirector';
import TecnicoScreen from '../screens/Tecnico';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={InicioScreen} />
      <Stack.Screen name="DetallesEvento" component={DetallesEventoScreen} />
      <Stack.Screen name="AcercaDe" component={AcercaDeScreen} />
      <Stack.Screen name="AgregarEvento" component={AgregarEventoScreen} />
      <Stack.Screen name="ConsultaDirector" component={ConsultaDirectorScreen} />
      <Stack.Screen name="Tecnico" component={TecnicoScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default StackNavigator;
