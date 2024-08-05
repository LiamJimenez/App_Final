import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ConsultaDirectorScreen = () => {
  const [cedula, setCedula] = useState('');
  const [director, setDirector] = useState(null);

  const directores = [
    {
      cedula: '1234567890',
      nombre: 'Edwin',
      apellido: 'De los Santos',
      fechaNacimiento: 'Desconocida',
      direccion: 'AES Dominicana',
      telefono: 'Desconocido',
    },
    {
      cedula: '2345678901',
      nombre: 'Francesca',
      apellido: 'Rainieri',
      fechaNacimiento: 'Desconocida',
      direccion: 'Grupo Punta Cana',
      telefono: 'Desconocido',
    },
    {
      cedula: '3456789012',
      nombre: 'María Waleska',
      apellido: 'Álvarez',
      fechaNacimiento: 'Desconocida',
      direccion: 'NAP del Caribe',
      telefono: 'Desconocido',
    },
    {
      cedula: '4567890123',
      nombre: 'Steven',
      apellido: 'Puig',
      fechaNacimiento: 'Desconocida',
      direccion: 'Banco BHD',
      telefono: 'Desconocido',
    },
    {
      cedula: '5678901234',
      nombre: 'Eduardo',
      apellido: 'Cruz',
      fechaNacimiento: 'Desconocida',
      direccion: 'Grupo Humano',
      telefono: 'Desconocido',
    },
    {
      cedula: '6789012345',
      nombre: 'Roberto',
      apellido: 'Herrera',
      fechaNacimiento: 'Desconocida',
      direccion: 'Interenergy Group',
      telefono: 'Desconocido',
    },
    {
      cedula: '7890123456',
      nombre: 'José A.',
      apellido: 'Álvarez',
      fechaNacimiento: 'Desconocida',
      direccion: 'Álvarez y Sánchez',
      telefono: 'Desconocido',
    },
    {
      cedula: '8901234567',
      nombre: 'Carlos José',
      apellido: 'Cueto',
      fechaNacimiento: 'Desconocida',
      direccion: 'Claro Dominicana',
      telefono: 'Desconocido',
    },
    {
      cedula: '9012345678',
      nombre: 'Lucile',
      apellido: 'Houellemont',
      fechaNacimiento: 'Desconocida',
      direccion: 'Dominican Watchman',
      telefono: 'Desconocido',
    },
    {
      cedula: '0123456789',
      nombre: 'Alexander',
      apellido: 'Schad',
      fechaNacimiento: 'Desconocida',
      direccion: 'Frederic Schad',
      telefono: 'Desconocido',
    }
  ];

  const buscarDirector = () => {
    const resultado = directores.find(director => director.cedula === cedula);
    if (resultado) {
      setDirector(resultado);
    } else {
      setDirector(null);
      alert('Director no encontrado');
    }
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
    backgroundColor: '#f0f8ff', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366', 
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccccff',
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    marginBottom: 20,
    color: '#003366', 
    backgroundColor: '#ffffff', 
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailsText: {
    fontSize: 18,
    color: '#003366', 
  },
});


export default ConsultaDirectorScreen;