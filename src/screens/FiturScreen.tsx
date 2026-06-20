import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const features = [
  {
    icon: 'chart-box-outline',
    title: 'Waste Monitoring',
    desc: 'Pantau volume limbah secara real-time melalui aplikasi mobile. Pengguna dapat melihat jumlah dan status limbah kapan saja.',
    benefits: [
      'Monitoring real-time dari mana saja',
      'Notifikasi otomatis saat kapasitas penuh',
      'Visualisasi data limbah harian, mingguan, bulanan',
    ],
  },
  {
    icon: 'file-check-outline',
    title: 'Legal Assistant',
    desc: 'Otomatisasi manifes digital limbah B3 sesuai regulasi KLHK sehingga pelaku usaha lebih mudah menjaga kepatuhan hukum.',
    benefits: [
      'Dokumen manifes digital otomatis',
      'Sesuai regulasi KLHK terbaru',
      'Arsip dokumen kepatuhan hukum',
    ],
  },
  {
    icon: 'chip',
    title: 'Analytical Services',
    desc: 'Algoritma prediktif mempelajari pola produksi limbah untuk mengoptimalkan jadwal penjemputan secara otomatis.',
    benefits: [
      'Prediksi volume limbah akurat',
      'Optimasi jadwal penjemputan',
      'Rekomendasi pengurangan limbah',
    ],
  },
  {
    icon: 'history',
    title: 'Historical Waste Management',
    desc: 'Riwayat lengkap data pembuangan dan laporan kepatuhan lingkungan dapat dicetak secara instan.',
    benefits: [
      'Riwayat pembuangan terlengkap',
      'Laporan kepatuhan siap cetak',
      'Audit trail transparan',
    ],
  },
];

const FiturScreen: React.FC = () => {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Fitur Utama Wastify</Text>
        <Text style={styles.headerDesc}>
          Aplikasi waste monitoring B2B berbasis IoT & AI analytics untuk
          membantu pelaku usaha mengelola limbah secara lebih efisien dan legal.
        </Text>
      </View>

      <View style={styles.list}>
        {features.map((feature) => (
          <View key={feature.title} style={styles.card}>
            <View style={styles.iconBox}>
              <Icon name={feature.icon} size={32} color="#059669" />
            </View>
            <Text style={styles.cardTitle}>{feature.title}</Text>
            <Text style={styles.cardDesc}>{feature.desc}</Text>
            <View style={styles.benefits}>
              {feature.benefits.map((b) => (
                <View key={b} style={styles.benefitRow}>
                  <Icon name="check-circle" size={16} color="#10b981" />
                  <Text style={styles.benefitText}>{b}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {flex: 1, backgroundColor: '#f0fdf4'},
  scrollContent: {paddingBottom: 32},
  header: {padding: 20, paddingTop: 60, paddingBottom: 32},
  headerTitle: {fontSize: 28, fontWeight: '700', color: '#111827', marginBottom: 12},
  headerDesc: {fontSize: 15, color: '#4b5563', lineHeight: 22},
  list: {paddingHorizontal: 20, gap: 16},
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    padding: 20,
  },
  iconBox: {
    width: 56,
    height: 56,
    backgroundColor: '#f0fdf4',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  cardTitle: {fontSize: 18, fontWeight: '600', color: '#111827', marginBottom: 8},
  cardDesc: {fontSize: 14, color: '#4b5563', lineHeight: 22, marginBottom: 12},
  benefits: {gap: 8},
  benefitRow: {flexDirection: 'row', alignItems: 'center', gap: 8},
  benefitText: {fontSize: 13, color: '#4b5563'},
});

export default FiturScreen;
