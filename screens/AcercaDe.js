import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const AcercaDeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Información de Técnicos</Text>
      
      <TouchableOpacity 
        style={styles.technicianContainer}
        onPress={() => navigation.navigate('Tecnico', { name: 'Liam Marcos Jimenez Perez', matricula: '2022-0818', location: 'Santo Domingo, Republica Dominicana', description: 'Web developer' })}
      >
        <Text style={styles.name}>Liam Marcos Jimenez Perez</Text>
        <Text style={styles.matricula}>Matrícula: 2022-0818</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.technicianContainer}
        onPress={() => navigation.navigate('Tecnico', { name: 'Edison Gabriel Pujols Montaño', matricula: '2022-2022', location: 'Santiago, Republica Dominicana', description: 'Backend developer' })}
      >
        <Text style={styles.name}>Edison Gabriel Pujols Montaño</Text>
        <Text style={styles.matricula}>Matrícula: 2022-2022</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f8ff', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
    textAlign: 'center',
  },
  technicianContainer: {
    backgroundColor: '#ffffff', 
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderColor: '#8fbcd4',
    borderWidth: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#003366',
  },
  matricula: {
    fontSize: 16,
    color: '#666666', 
    marginTop: 5,
  },
});

export default AcercaDeScreen;
