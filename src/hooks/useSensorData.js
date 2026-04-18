// src/hooks/useSensorData.js
import { useState, useEffect } from 'react';
import { fetchSensorData } from '../services/api';

export const useSensorData = () => {
  const [data, setData] = useState({
    temperatura: 0,
    humedad: 0,
    ubicacion: 'Cargando...',
    estado: 'Cargando...'
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; 

    const loadData = async () => {
      try {
        const result = await fetchSensorData();
        if (isMounted) {
          setData(result);
          setError(null); // Limpiamos errores si la conexión se recupera
        }
      } catch (err) {
        if (isMounted) {
          setError('Fallo de conexión con el servidor IoT.');
          // Opcionalmente, puedes cambiar el estado a "Desconectado" aquí
          setData(prev => ({ ...prev, estado: 'Desconectado' }));
        }
      }
    };

    // 1. Ejecutar inmediatamente al montar el componente
    loadData();

    // 2. Configurar la repetición cada 5000 milisegundos (5 segundos)
    const intervalId = setInterval(loadData, 5000);

    // 3. Limpieza: Se ejecuta si el usuario sale de la vista AR
    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  // Devolvemos el objeto desestructurado junto con un posible error
  return { ...data, error };
};
