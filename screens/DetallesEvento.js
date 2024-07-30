import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetallesEventoScreen = ({ route }) => {
  const { event } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.label}>Centro Educativo:</Text>
      <Text style={styles.value}>{event.school}</Text>

      <Text style={styles.label}>Regional:</Text>
      <Text style={styles.value}>{event.region}</Text>

      <Text style={styles.label}>Distrito:</Text>
      <Text style={styles.value}>{event.district}</Text>

      <Text style={styles.label}>Fecha:</Text>
      <Text style={styles.value}>{event.date}</Text>

      <Text style={styles.label}>Descripción:</Text>
      <Text style={styles.description}>{event.description}</Text>

      {event.photo && (
        <Image source={{ uri: event.photo }} style={styles.photo} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#1e1e1e', 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e0e0e0',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#b0b0b0',
    marginTop: 5,
    marginBottom: 20,
  },
  photo: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default DetallesEventoScreen;
