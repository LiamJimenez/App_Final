// screens/ConsultaDirectorScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ConsultaDirectorScreen = () => {
  const [cedula, setCedula] = useState('');
  const [director, setDirector] = useState(null);

  const buscarDirector = () => {
    // Aquí se implementaría la lógica para buscar el director por su cédula
    setDirector({
      nombre: 'Juan Pérez',
      apellido: 'López',
      fechaNacimiento: '01/01/1970',
      direccion: 'Calle Falsa 123',
      telefono: '555-5555',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de Director</Text>
      <TextInput
        style={styles.input}
        value={cedula}
        onChangeText={setCedula}
        placeholder="Cédula del Director"
        placeholderTextColor="#aaa"
      />
      <Button title="Buscar Director" onPress={buscarDirector} />
      {director && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>Nombre: {director.nombre}</Text>
          <Text style={styles.detailsText}>Apellido: {director.apellido}</Text>
          <Text style={styles.detailsText}>Fecha de Nacimiento: {director.fechaNacimiento}</Text>
          <Text style={styles.detailsText}>Dirección: {director.direccion}</Text>
          <Text style={styles.detailsText}>Teléfono: {director.telefono}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#444',
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    marginBottom: 20,
    color: '#ffffff',
    backgroundColor: '#333',
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailsText: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default ConsultaDirectorScreen;
