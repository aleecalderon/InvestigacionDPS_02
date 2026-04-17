import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ViroARSceneNavigator } from '@viro-community/react-viro';
import MainARScene from './src/ar/MainARScene';

export default function App() {
  return (
    <View style={styles.container}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: MainARScene,
        }}
        style={styles.arView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  arView: { flex: 1 },
});