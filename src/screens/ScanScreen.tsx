import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ScanScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Sampah</Text>
      <Text style={styles.subtitle}>Arahkan kamera ke sampah</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0fdf4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#22c55e',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 8,
  },
});

export default ScanScreen;
