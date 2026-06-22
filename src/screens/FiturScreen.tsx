import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
  benefits: string[];
  screen: string;
}

const features: FeatureItem[] = [
  {
    icon: 'chart-box-outline',
    title: 'Waste Monitoring',
    desc: 'Pantau volume limbah secara real-time melalui aplikasi mobile. Pengguna dapat melihat jumlah dan status limbah kapan saja.',
    benefits: [
      'Monitoring real-time dari mana saja',
      'Notifikasi otomatis saat kapasitas penuh',
      'Visualisasi data limbah harian, mingguan, bulanan',
    ],
    screen: 'Monitoring',
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
    screen: 'Legal',
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
    screen: 'Analytical',
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
    screen: 'Historical',
  },
  {
    icon: 'truck',
    title: 'Status Tracking',
    desc: 'Pantau status pengelolaan limbah Anda secara real-time dari penjemputan hingga selesai diproses.',
    benefits: [
      'Tracking real-time',
      'Notifikasi status terbaru',
      'Riwayat perjalanan lengkap',
    ],
    screen: 'Tracking',
  },
  {
    icon: 'calendar-clock',
    title: 'Penjadwalan',
    desc: 'Atur dan kelola jadwal penjemputan limbah dengan kalender interaktif yang mudah digunakan.',
    benefits: [
      'Kalender interaktif',
      'Penjadwalan otomatis',
      'Pengingat jadwal',
    ],
    screen: 'Scheduling',
  },
  {
    icon: 'file-invoice-outline',
    title: 'Digital Invoicing',
    desc: 'Kelola dan unduh faktur layanan pengelolaan limbah secara digital dan terintegrasi.',
    benefits: [
      'Faktur digital otomatis',
      'Riwayat pembayaran',
      'Export laporan keuangan',
    ],
    screen: 'Invoicing',
  },
  {
    icon: 'chart-line',
    title: 'Analytics Report',
    desc: 'Laporan dan analisis pengelolaan limbah dengan visualisasi data yang informatif.',
    benefits: [
      'Dashboard analitik',
      'Visualisasi data interaktif',
      'Export laporan',
    ],
    screen: 'Analytics',
  },
  {
    icon: 'headset',
    title: 'Help Desk',
    desc: 'Pusat bantuan dan dukungan pelanggan untuk menyelesaikan berbagai permasalahan.',
    benefits: [
      'Tiket support terintegrasi',
      'Live chat dengan tim support',
      'FAQ dan panduan lengkap',
    ],
    screen: 'Helpdesk',
  },
];

interface FiturScreenProps {
  navigation: any;
}

const FiturScreen: React.FC<FiturScreenProps> = ({navigation}) => {
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
          <TouchableOpacity
            key={feature.title}
            style={styles.card}
            onPress={() => navigation.navigate(feature.screen)}>
            <View style={styles.iconBox}>
              <Icon name={feature.icon as any} size={32} color="#059669" />
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
            <View style={styles.cardArrow}>
              <Icon name="arrow-right" size={18} color="#059669" />
            </View>
          </TouchableOpacity>
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
    marginBottom: 16,
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
  cardArrow: {alignItems: 'flex-end', marginTop: 12},
});

export default FiturScreen;
