import React from 'react';
import { ViroARScene, ViroText, ViroAmbientLight, ViroFlexView } from '@viro-community/react-viro';
import { useSensorData } from '../hooks/useSensorData';

const MainARScene = () => {
  // Consumimos los datos del hook personalizado
  const { temperatura, humedad, ubicacion, error } = useSensorData();

  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" />
      
      <ViroFlexView
        style={{ flexDirection: 'column', padding: 0.05, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        width={0.8}
        height={0.8}
        position={[0, 0, -1]} 
      >
        <ViroText 
          text={error ? error : "Panel de Monitoreo IoT"} 
          scale={[0.15, 0.15, 0.15]} 
          style={{ fontFamily: 'Arial', fontSize: 24, color: '#00ff00' }}
        />
        
        <ViroText 
          text={`Ubicación: ${ubicacion}`} 
          scale={[0.12, 0.12, 0.12]} 
          style={{ fontFamily: 'Arial', fontSize: 20, color: '#ffffff' }}
        />

        <ViroText 
          text={`Temperatura: ${temperatura}`} 
          scale={[0.12, 0.12, 0.12]} 
          style={{ fontFamily: 'Arial', fontSize: 20, color: '#ff5733' }}
        />

        <ViroText 
          text={`Humedad: ${humedad}`} 
          scale={[0.12, 0.12, 0.12]} 
          style={{ fontFamily: 'Arial', fontSize: 20, color: '#33ccff' }}
        />

        <ViroText 
          text="Actualizando cada 5s..." 
          scale={[0.08, 0.08, 0.08]} 
          style={{ fontFamily: 'Arial', fontSize: 16, color: '#aaaaaa', textAlign: 'center' }}
        />
      </ViroFlexView>
    </ViroARScene>
  );
};

export default MainARScene;
