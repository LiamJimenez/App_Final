import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const InicioScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchEvents = async () => {
      const storedEvents = await AsyncStorage.getItem('events');
      if (storedEvents) {
        setEvents(JSON.parse(storedEvents));
      }
    };
    if (isFocused) {
      fetchEvents();
    }
  }, [isFocused]);

  const deleteEvent = async (id) => {
    const newEvents = events.filter((event) => event.id !== id);
    setEvents(newEvents);
    await AsyncStorage.setItem('events', JSON.stringify(newEvents));
  };

  const confirmDelete = (id) => {
    Alert.alert(
      'Eliminar Incidencia',
      '¿Estás seguro de que quieres eliminar esta incidencia?',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Sí', onPress: () => deleteEvent(id) },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Registro de Incidencias</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AgregarEvento')}>
        <Text style={styles.addButtonText}>Agregar Incidencia</Text>
      </TouchableOpacity>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[styles.eventContainer, index === 0 && styles.firstEvent]}
            onPress={() => navigation.navigate('DetallesEvento', { event: item })}
          >
            <View style={styles.eventHeader}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                <Icon name="trash-outline" size={22} color="#ff6f6f" />
              </TouchableOpacity>
            </View>
            {item.photo && <Image source={{ uri: item.photo }} style={styles.eventPhoto} />}
            <Text style={styles.eventInfo}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.officialButton} onPress={() => navigation.navigate('AcercaDe')}>
        <Text style={styles.officialButtonText}>Técnicos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',  
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',  
    textAlign: 'center',
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: '#1e88e5',  
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  eventContainer: {
    padding: 15,
    backgroundColor: '#333333',  
    marginBottom: 15,
    borderRadius: 8,
    borderColor: '#444444',  
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  firstEvent: {
    marginTop: 20,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',  
  },
  eventPhoto: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginTop: 10,
  },
  eventInfo: {
    fontSize: 14,
    color: '#b0b0b0',  
    marginTop: 10,
  },
  officialButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#1e88e5',  
    borderRadius: 8,
    alignItems: 'center',
  },
  officialButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default InicioScreen;
