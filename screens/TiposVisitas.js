// screens/TiposVisitasScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TiposVisitasScreen = () => {
  const tiposDeVisitas = [
    { id: '1', tipo: 'Visita de inspección' },
    { id: '2', tipo: 'Visita de seguimiento' },
    // Agrega más tipos de visitas según sea necesario
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tipos de Visitas</Text>
      <FlatList
        data={tiposDeVisitas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.tipo}</Text>
          </View>
        )}
      />
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
  itemContainer: {
    padding: 15,
    backgroundColor: '#333333',
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default TiposVisitasScreen;
