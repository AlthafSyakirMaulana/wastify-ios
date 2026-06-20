import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wastify</Text>
      <Text style={styles.subtitle}>Kelola sampahmu dengan bijak</Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#22c55e',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 8,
  },
});

export default HomeScreen;
