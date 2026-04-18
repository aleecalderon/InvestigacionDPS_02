// src/services/api.js

// URL pública de ejemplo que devuelve datos simulados de sensores
const BASE_URL = 'https://662696660523321558f12c3b.mockapi.io/api/v1/sensors/1';

export const fetchSensorData = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Error en la comunicación con el servidor');
    }
    const data = await response.json();
    
    // Retornamos el objeto con el formato solicitado
    return {
      temperatura: data.temperature || "24°C",
      humedad: data.humidity || "60%",
      ubicacion: data.location || "Laboratorio UDB",
    };
  } catch (error) {
    console.error("Error al obtener datos del sensor:", error);
    throw error;
  }
};
