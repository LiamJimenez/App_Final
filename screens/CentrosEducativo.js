import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { getCentroEducativo } from '../services/api';

const CentroEducativoScreen = ({ route }) => {
  const { id } = route.params; // Asegúrate de pasar el id del centro educativo como parámetro
  const [centro, setCentro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCentroEducativo = async () => {
      try {
        const centroEncontrado = await getCentroEducativo(id);
        console.log('Centro encontrado en el componente:', centroEncontrado);
        setCentro(centroEncontrado);
      } catch (error) {
        Alert.alert('Error', 'No se pudo obtener la información del centro educativo');
      } finally {
        setLoading(false);
      }
    };

    fetchCentroEducativo();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {centro ? (
        <>
          <Text style={styles.title}>{centro.nombre}</Text>
          <Text style={styles.info}>Dirección: {centro.d_municipal}</Text>
          {/* Si tienes otros campos como teléfono, dirección, etc., puedes mostrarlos aquí */}
        </>
      ) : (
        <Text>No se encontró información del centro educativo</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    color: '#666666',
    marginBottom: 10,
  },
});

export default CentroEducativoScreen;
