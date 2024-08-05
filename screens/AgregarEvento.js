// screens/AgregarEventoScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

const AgregarEventoScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [school, setSchool] = useState('');
  const [region, setRegion] = useState('');
  const [district, setDistrict] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permiso requerido", "Se requiere permiso para acceder a la cámara.");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const saveEvent = async () => {
    if (title.trim() === '' || school.trim() === '' || region.trim() === '' || district.trim() === '' || date.trim() === '' || description.trim() === '') {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }

    const newEvent = {
      id: Date.now().toString(),
      title,
      school,
      region,
      district,
      date,
      description,
      photo,
    };

    const storedEvents = await AsyncStorage.getItem('events');
    const events = storedEvents ? JSON.parse(storedEvents) : [];
    events.push(newEvent);

    await AsyncStorage.setItem('events', JSON.stringify(events));
    Alert.alert('Éxito', 'Incidencia agregada correctamente');
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100} 
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <Text style={styles.label}>Título de la Incidencia</Text>
          <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Título" placeholderTextColor="#aaa" />

          <Text style={styles.label}>Centro Educativo</Text>
          <TextInput style={styles.input} value={school} onChangeText={setSchool} placeholder="Centro Educativo" placeholderTextColor="#aaa" />

          <Text style={styles.label}>Regional</Text>
          <TextInput style={styles.input} value={region} onChangeText={setRegion} placeholder="Regional" placeholderTextColor="#aaa" />

          <Text style={styles.label}>Distrito</Text>
          <TextInput style={styles.input} value={district} onChangeText={setDistrict} placeholder="Distrito" placeholderTextColor="#aaa" />

          <Text style={styles.label}>Fecha</Text>
          <TextInput style={styles.input} value={date} onChangeText={setDate} placeholder="Fecha" placeholderTextColor="#aaa" />

          <Text style={styles.label}>Descripción de la Incidencia</Text>
          <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Descripción" placeholderTextColor="#aaa" />

          <TouchableOpacity onPress={takePhoto} style={styles.cameraButton}>
            <Icon name="camera-outline" size={30} color="#ffffff" />
            <Text style={styles.cameraButtonText}>Tomar Foto</Text>
          </TouchableOpacity>
          {photo && <Image source={{ uri: photo }} style={styles.photo} />}

          <TouchableOpacity style={styles.saveButton} onPress={saveEvent}>
            <Text style={styles.saveButtonText}>Guardar Incidencia</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: '#f0f8ff', 
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  label: {
    fontSize: 18,
    color: '#003366', 
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#8fbcd4',
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#ffffff', 
    color: '#003366', 
  },
  cameraButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00796b', 
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  cameraButtonText: {
    color: '#ffffff',
    marginLeft: 10,
    fontSize: 16,
  },
  photo: {
    width: '100%',
    height: 200,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: '#1e88e5',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AgregarEventoScreen;


