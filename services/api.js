import axios from 'axios';

const BASE_URL = 'https://adamix.net/minerd/minerd/centros.php?regional=01';

export const getCentroEducativo = async (id) => {
  try {
    const response = await axios.get(BASE_URL);
    // Verifica el formato de la respuesta
    console.log('Datos de la API:', response.data);
    // Asegúrate de que response.data.centros es un objeto
    if (typeof response.data.centros === 'object' && response.data.centros !== null) {
      const centro = response.data.centros[id.toString()];
      console.log('Centro encontrado:', centro);
      return centro;
    } else {
      throw new Error('La respuesta de la API no contiene un objeto válido');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
