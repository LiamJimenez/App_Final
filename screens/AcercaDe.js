import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AcercaDeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Información de Técnicos</Text>
      
      <View style={styles.technicianContainer}>
        <Text style={styles.name}>Liam Marcos Jimenez Perez</Text>
        <Text style={styles.matricula}>Matrícula: 2022-0818</Text>
      </View>

      <View style={styles.technicianContainer}>
        <Text style={styles.name}>Edison Gabriel Pujols Montaño</Text>
        <Text style={styles.matricula}>Matrícula: 2022-2022</Text>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#121212',  
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  technicianContainer: {
    backgroundColor: '#333333', 
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderColor: '#444444',
    borderWidth: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  matricula: {
    fontSize: 16,
    color: '#b0b0b0',  
    marginTop: 5,
  },
});

export default AcercaDeScreen;
