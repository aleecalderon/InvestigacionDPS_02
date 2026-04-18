import React from 'react';
import { ViroText, ViroFlexView, ViroNode } from '@viro-community/react-viro';

/**
 * Componente: DataPanelAR
 * Diseñado para mostrar datos de sensores IoT en Realidad Aumentada.
 */
const DataPanelAR = ({ temperatura, humedad, ubicacion, estado }) => {
  
  // Tarea clave: Cambio de color dinámico.
  // Si la temperatura es mayor a 30°C, el texto será rojo (alerta), de lo contrario cian.
  const colorTemperatura = temperatura > 30 ? '#FF0000' : '#00FBFF';

  return (
    <ViroNode position={[0, 0, -1.5]}>
      <ViroFlexView 
        style={{ 
          flexDirection: 'column', 
          padding: 0.1, 
          backgroundColor: 'rgba(0, 0, 0, 0.7)', 
          borderRadius: 0.05 
        }} 
        width={1.2} 
        height={1.0}
      >
        {/* Título: Ubicación del sensor */}
        <ViroText 
          text={`UBICACIÓN: ${ubicacion}`} 
          scale={[0.2, 0.2, 0.2]} 
          style={{ color: '#FFFFFF', fontWeight: 'bold' }} 
        />

        {/* Datos de Temperatura con color dinámico */}
        <ViroText 
          text={`Temperatura: ${temperatura}°C`} 
          scale={[0.18, 0.18, 0.18]} 
          style={{ color: colorTemperatura }} 
        />

        {/* Datos de Humedad */}
        <ViroText 
          text={`Humedad: ${humedad}%`} 
          scale={[0.18, 0.18, 0.18]} 
          style={{ color: '#FFFFFF' }}
        />

        {/* Estado del sensor */}
        <ViroText 
          text={`Estado: ${estado}`} 
          scale={[0.12, 0.12, 0.12]} 
          style={{ color: estado === 'Activo' ? '#00FF00' : '#FFA500' }} 
        />
      </ViroFlexView>
    </ViroNode>
  );
};

export default DataPanelAR;