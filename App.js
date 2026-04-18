import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ViroARSceneNavigator } from '@viro-community/react-viro';
import MainARScene from './src/ar/MainARScene';


import OverlayUI from './src/components/OverlayUI'; 

export default function App() {
  // Datos que tú controlas
  const [sensorData, setSensorData] = useState({
    temp: 25.0,
    hum: 60.0,
    timestamp: new Date(),
  });

  const handleRefresh = () => {
    // Tu lógica de actualización manual
    setSensorData({
      temp: 20 + Math.random() * 10,
      hum: 50 + Math.random() * 20,
      timestamp: new Date(),
    });
  };

  return (
    <View style={styles.container}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{ scene: MainARScene }}
        style={styles.arView}
        
        viroAppProps={{ sensorData }} 
      />

      {/* TU INTERFAZ 2D */}
      <OverlayUI 
        data={sensorData} 
        status="online"
        onRefresh={handleRefresh} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  arView: { flex: 1 },
});