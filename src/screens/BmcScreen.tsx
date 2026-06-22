import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const bmcItems = [
  {
    icon: 'alert-circle-outline',
    title: 'Problem',
    desc: 'Pelaku industri kecil atau menengah sering kali gagal dalam mengelola limbahnya sehingga berakibat pada pencemaran lingkungan dan penutupan industri.',
    bg: '#fef2f2',
    border: '#fecaca',
    iconColor: '#dc2626',
  },
  {
    icon: 'lightbulb-outline',
    title: 'Solution',
    desc: 'Waste Monitoring: aplikasi yang memantau limbah yang dihasilkan. Pengguna dapat mengetahui berapa banyak limbah dan statusnya dari aplikasi.',
    bg: '#eff6ff',
    border: '#bfdbfe',
    iconColor: '#2563eb',
  },
  {
    icon: 'star-outline',
    title: 'Unique Value Proposition',
    desc: 'Dasbor pintar limbah B2B: pantau IoT, otomatisasi manifes legal, dan efisiensi operasional.',
    bg: '#fefce8',
    border: '#fef08a',
    iconColor: '#ca8a04',
  },
  {
    icon: 'lightning-bolt-outline',
    title: 'Unfair Advantage',
    desc: 'Integrasi eksklusif antara sensor IoT dan sistem regulasi manifes limbah lokal Indonesia, serta jejaring akademik dan industri yang kuat sebagai basis penetrasi awal di Jawa Timur.',
    bg: '#faf5ff',
    border: '#e9d5ff',
    iconColor: '#9333ea',
  },
  {
    icon: 'account-group-outline',
    title: 'Customer Segment',
    desc: 'Pelaku UMKM yang menghasilkan limbah dengan volume menengah ke tinggi, khususnya limbah B3. Contoh: industri catering komersial, fasilitas kesehatan, bengkel otomotif.',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    iconColor: '#16a34a',
  },
  {
    icon: 'chart-bar',
    title: 'Key Metric',
    desc: 'Jumlah klien B2B aktif, total titik sensor IoT terpasang, pertumbuhan MRR, tingkat keberhasilan otomasi dokumen manifes legal.',
    bg: '#eef2ff',
    border: '#c7d2fe',
    iconColor: '#4f46e5',
  },
  {
    icon: 'share-variant-outline',
    title: 'Channels',
    desc: 'Penjualan langsung B2B, penjualan langsung ke manajemen pabrik, kemitraan melalui pengelola kawasan industri.',
    bg: '#fdf2f8',
    border: '#fbcfe8',
    iconColor: '#db2777',
  },
  {
    icon: 'currency-usd',
    title: 'Cost Structure',
    desc: 'Pengadaan dan pemeliharaan sensor IoT, pengembangan platform dan infrastruktur cloud, biaya operasional tim penjualan B2B, pengurusan legalitas manifes.',
    bg: '#fff7ed',
    border: '#fed7aa',
    iconColor: '#ea580c',
  },
  {
    icon: 'credit-card-outline',
    title: 'Revenue Streams',
    desc: 'Model berlangganan, pendapatan layanan waste management, pendapatan dari fitur tambahan atau layanan premium.',
    bg: '#f0fdfa',
    border: '#99f6e4',
    iconColor: '#0d9488',
  },
];

const BmcScreen: React.FC = () => {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Business Model Canvas</Text>
        <Text style={styles.headerDesc}>
          Model bisnis Wastify yang menggambarkan bagaimana kami menciptakan,
          memberikan, dan menangkap nilai.
        </Text>
      </View>

      <View style={styles.grid}>
        {bmcItems.map((item) => (
          <View
            key={item.title}
            style={[styles.card, {backgroundColor: item.bg, borderColor: item.border}]}>
            <Icon name={item.icon as any} size={28} color={item.iconColor} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
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
  grid: {paddingHorizontal: 20, gap: 12},
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
  },
  cardTitle: {fontSize: 16, fontWeight: '600', color: '#111827', marginTop: 12, marginBottom: 6},
  cardDesc: {fontSize: 13, color: '#4b5563', lineHeight: 20},
});

export default BmcScreen;
