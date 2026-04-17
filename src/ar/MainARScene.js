import React from 'react';
import { ViroARScene, ViroText, ViroAmbientLight, ViroFlexView } from '@viro-community/react-viro';

const MainARScene = () => {
  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" />
      <ViroFlexView
        style={{flexDirection: 'column', padding: .1}}
        width={0.5}
        height={0.5}
        position={[0, 0, -1]} 
      >
        <ViroText 
          text="Sensor IoT: Conectando..." 
          scale={[0.2, 0.2, 0.2]} 
          style={{fontFamily: 'Arial', fontSize: 30, color: '#ffffff'}}
        />
      </ViroFlexView>
    </ViroARScene>
  );
};

export default MainARScene;