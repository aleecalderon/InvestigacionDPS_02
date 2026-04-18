import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { formatTemperature, formatHumidity, formatLastUpdate } from '../utils/formatters';
//

const OverlayUI = ({ data, status, onRefresh }) => {
  return (
    <SafeAreaView style={styles.overlayContainer} pointerEvents="box-none">
      <View style={styles.statusBadge}>
        <Text style={styles.statusText}>ESTADO: {status.toUpperCase()}</Text>
      </View>

      <View style={styles.dataCard}>
        <Text style={styles.value}>T: {formatTemperature(data?.temp)}</Text>
        <Text style={styles.value}>H: {formatHumidity(data?.hum)}</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.refreshButton} onPress={onRefresh}>
          <Text style={styles.buttonText}>ACTUALIZAR MANUALMENTE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlayContainer: { flex: 1, justifyContent: 'space-between', padding: 20 },
  statusBadge: { backgroundColor: 'rgba(0,0,0,0.6)', padding: 10, borderRadius: 20, alignSelf: 'center' },
  statusText: { color: 'white', fontWeight: 'bold' },
  dataCard: { backgroundColor: 'rgba(255,255,255,0.8)', padding: 15, borderRadius: 10 },
  value: { fontSize: 20, fontWeight: 'bold', color: '#007AFF' },
  footer: { alignItems: 'center', marginBottom: 20 },
  refreshButton: { backgroundColor: '#007AFF', padding: 15, borderRadius: 10 },
  buttonText: { color: 'white', fontWeight: 'bold' }
});

export default OverlayUI;