// src/hooks/useSensorData.js
import { useState, useEffect } from 'react';
import { fetchSensorData } from '../services/api';

export const useSensorData = () => {
  const [data, setData] = useState({
    temperatura: 'Cargando...',
    humedad: 'Cargando...',
    ubicacion: 'Buscando...'
  });
  const [error, setError] = useState(null);

  const updateData = async () => {
    try {
      const result = await fetchSensorData();
      setData(result);
      setError(null);
    } catch (err) {
      setError("Fallo al sincronizar datos");
    }
  };

  useEffect(() => {
    // Primera carga
    updateData();

    // Configuración del intervalo de 5 segundos
    const interval = setInterval(() => {
      updateData();
    }, 5000);

    // Limpieza al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return { ...data, error };
};
