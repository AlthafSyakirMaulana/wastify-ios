import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const problems = [
  {
    icon: 'file-document-outline',
    title: 'Risiko Hukum',
    desc: 'Pelaku usaha yang tidak patuh terhadap regulasi limbah dapat terkena sanksi pidana dan denda.',
  },
  {
    icon: 'chart-bar',
    title: 'Pencemaran Lingkungan',
    desc: 'Pembuangan limbah yang tidak sesuai standar dapat mencemari ekosistem air dan tanah.',
  },
  {
    icon: 'chip',
    title: 'Dampak bagi Pelaku Usaha',
    desc: 'Ketidakpastian biaya operasional dan risiko penutupan industri.',
  },
  {
    icon: 'history',
    title: 'Dampak bagi Masyarakat',
    desc: 'Paparan zat beracun dapat menimbulkan ancaman kesehatan kronis.',
  },
];

const features = [
  {
    icon: 'chart-box-outline',
    title: 'Waste Monitoring',
    desc: 'Pantau volume limbah secara real-time melalui aplikasi mobile.',
  },
  {
    icon: 'file-check-outline',
    title: 'Legal Assistant',
    desc: 'Otomatisasi manifes digital limbah B3 sesuai regulasi KLHK.',
  },
  {
    icon: 'chip',
    title: 'Analytical Services',
    desc: 'Algoritma prediktif untuk mengoptimalkan jadwal penjemputan.',
  },
  {
    icon: 'history',
    title: 'Historical Waste Mgmt',
    desc: 'Riwayat lengkap data pembuangan dan laporan kepatuhan.',
  },
];

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.hero}>
        <View style={styles.heroContent}>
          <View style={styles.logoRow}>
            <Icon name="recycle" size={32} color="#059669" />
            <Text style={styles.logoText}>Wastify</Text>
          </View>
          <Text style={styles.heroTitle}>
            Membangun Masa Depan{' '}
            <Text style={styles.heroHighlight}>Bisnis Berkelanjutan</Text>
          </Text>
          <Text style={styles.heroDesc}>
            Solusi pengelolaan limbah digital berbasis IoT dan AI analytics untuk
            membantu UMKM dan industri mengelola limbah B3 secara legal,
            transparan, dan efisien.
          </Text>
          <View style={styles.heroButtons}>
            <TouchableOpacity
              style={styles.btnPrimary}
              onPress={() => navigation.navigate('Fitur')}>
              <Text style={styles.btnPrimaryText}>Jelajahi Fitur</Text>
              <Icon name="arrow-right" size={18} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnSecondary}
              onPress={() => navigation.navigate('Tentang')}>
              <Text style={styles.btnSecondaryText}>Pelajari Lebih Lanjut</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Masalah yang Kami Selesaikan</Text>
        <Text style={styles.sectionDesc}>
          Sekitar 40% limbah B3 di Indonesia belum terkelola secara resmi.
        </Text>
        <View style={styles.cardGrid}>
          {problems.map((item) => (
            <View key={item.title} style={styles.card}>
              <Icon name={item.icon} size={28} color="#059669" />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={[styles.section, styles.sectionAlt]}>
        <Text style={styles.sectionTitle}>Fitur Utama Wastify</Text>
        <View style={styles.featureList}>
          {features.map((item) => (
            <View key={item.title} style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <Icon name={item.icon} size={24} color="#059669" />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>{item.title}</Text>
                <Text style={styles.featureDesc}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Siap Mengelola Limbah Secara Legal?</Text>
        <Text style={styles.ctaDesc}>
          Bergabunglah dengan Wastify dan kelola limbah bisnis Anda secara
          transparan, legal, dan berkelanjutan.
        </Text>
        <TouchableOpacity
          style={styles.btnPrimary}
          onPress={() => navigation.navigate('Kontak')}>
          <Text style={styles.btnPrimaryText}>Hubungi Kami</Text>
          <Icon name="arrow-right" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {flex: 1, backgroundColor: '#fff'},
  scrollContent: {paddingBottom: 32},
  hero: {
    backgroundColor: '#f0fdf4',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 48,
  },
  heroContent: {},
  logoRow: {flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 24},
  logoText: {fontSize: 24, fontWeight: '700', color: '#065f46'},
  heroTitle: {fontSize: 32, fontWeight: '800', color: '#111827', lineHeight: 40, marginBottom: 16},
  heroHighlight: {color: '#059669'},
  heroDesc: {fontSize: 16, color: '#4b5563', lineHeight: 24, marginBottom: 24},
  heroButtons: {flexDirection: 'row', flexWrap: 'wrap', gap: 12},
  btnPrimary: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#059669',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
  },
  btnPrimaryText: {color: '#fff', fontSize: 15, fontWeight: '600'},
  btnSecondary: {
    borderWidth: 2,
    borderColor: '#059669',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
  },
  btnSecondaryText: {color: '#047857', fontSize: 15, fontWeight: '600'},
  section: {padding: 20, paddingTop: 48},
  sectionAlt: {backgroundColor: '#f0fdf4'},
  sectionTitle: {fontSize: 26, fontWeight: '700', color: '#111827', marginBottom: 8},
  sectionDesc: {fontSize: 15, color: '#4b5563', marginBottom: 24, lineHeight: 22},
  cardGrid: {gap: 12},
  card: {
    backgroundColor: '#f0fdf4',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    padding: 20,
  },
  cardTitle: {fontSize: 16, fontWeight: '600', color: '#111827', marginTop: 12, marginBottom: 6},
  cardDesc: {fontSize: 13, color: '#4b5563', lineHeight: 20},
  featureList: {gap: 12},
  featureCard: {
    flexDirection: 'row',
    gap: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    padding: 20,
  },
  featureIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#f0fdf4',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureContent: {flex: 1},
  featureTitle: {fontSize: 16, fontWeight: '600', color: '#111827', marginBottom: 4},
  featureDesc: {fontSize: 13, color: '#4b5563', lineHeight: 20},
  ctaSection: {padding: 20, paddingTop: 48, paddingBottom: 48, alignItems: 'center'},
  ctaTitle: {fontSize: 24, fontWeight: '700', color: '#111827', textAlign: 'center', marginBottom: 12},
  ctaDesc: {fontSize: 15, color: '#4b5563', textAlign: 'center', lineHeight: 22, marginBottom: 24},
});

export default HomeScreen;
