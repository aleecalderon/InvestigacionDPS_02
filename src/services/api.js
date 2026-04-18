// src/services/api.js

// Reemplaza con la IP de tu servidor local o URL de tu API. 
// Para probar en el emulador de Android Studio contra un localhost de tu PC, usa 'http://10.0.2.2:TU_PUERTO/ruta'
const API_URL = 'https://tu-api-iot.com/sensor/actual'; 

export const fetchSensorData = async () => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // Si la API requiere autenticación (enfoque zero-trust), agrega el token aquí:
        // 'Authorization': 'Bearer TU_TOKEN_AQUI'
      },
    });

    if (!response.ok) {
      throw new Error(`Error del servidor: ${response.status}`);
    }

    const data = await response.json();

    // Validamos y devolvemos estrictamente la estructura esperada { temperatura, humedad, ubicacion }
    // Añadimos 'estado' porque tu componente DataPanelAR lo utiliza.
    return {
      temperatura: data.temperatura ?? 0,
      humedad: data.humedad ?? 0,
      ubicacion: data.ubicacion ?? 'Desconocida',
      estado: data.estado ?? 'Inactivo',
    };
  } catch (error) {
    console.error('[API Service] Falla de conexión:', error.message);
    throw error; // Propagamos el error para que el hook decida qué hacer
  }
};
