// screens/Tecnico.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TecnicoScreen = ({ route }) => {
  const { name, matricula, location, description, photo } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={photo} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.location}>{location}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.linksContainer}>
          <TouchableOpacity style={styles.linkButton}>
            <Icon name="logo-github" size={20} color="#ffffff" />
            <Text style={styles.linkText}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton}>
            <Icon name="logo-linkedin" size={20} color="#ffffff" />
            <Text style={styles.linkText}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton}>
            <Icon name="logo-instagram" size={20} color="#ffffff" />
            <Text style={styles.linkText}>Instagram</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#141414',
  },
  card: {
    backgroundColor: '#1F1F1F',
    width: '90%',
    maxWidth: 350,
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  image: {
    borderRadius: 100,
    width: 125,
    height: 125,
  },
  infoContainer: {
    textAlign: 'center',
  },
  name: {
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 5,
  },
  location: {
    color: '#B5D362',
    fontSize: 18,
  },
  description: {
    color: '#9E9E9E',
    marginTop: 25,
  },
  linksContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#333333',
    borderRadius: 5,
    width: '100%',
    justifyContent: 'center',
  },
  linkText: {
    color: '#DDDDDD',
    marginLeft: 10,
  },
});

export default TecnicoScreen;
