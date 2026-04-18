// 01-frontend/src/ar/MainARScene.js

import React from 'react';
import { ViroARScene, ViroText, ViroAmbientLight } from '@viro-community/react-viro';
import DataPanelAR from '../components/DataPanelAR';
import { useSensorData } from '../hooks/useSensorData';

const MainARScene = () => {
  // 1. Consumimos el hook: esto inicia automáticamente el setInterval de 5 segundos
  const { temperatura, humedad, ubicacion, estado, error } = useSensorData();

  return (
    <ViroARScene>
      {/* Luz ambiental básica para que los elementos se vean bien */}
      <ViroAmbientLight color="#ffffff" />
      
      {/* 2. Manejo de estado: Evaluamos si ocurrió un error en la API */}
      {error ? (
        // Si el puente con el servidor falla, mostramos un texto de alerta en rojo
        <ViroText 
          text={`Alerta de Conexión: ${error}`} 
          scale={[0.2, 0.2, 0.2]} 
          position={[0, 0, -1.5]} 
          style={{ color: '#FF0000', fontWeight: 'bold' }} 
        />
      ) : (
        // 3. Si la conexión es exitosa, renderizamos el panel y le pasamos los datos dinámicos
        <DataPanelAR 
          temperatura={temperatura}
          humedad={humedad}
          ubicacion={ubicacion}
          estado={estado}
        />
      )}
    </ViroARScene>
  );
};

export default MainARScene;
