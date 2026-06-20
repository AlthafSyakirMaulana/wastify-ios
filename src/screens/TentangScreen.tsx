import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TentangScreen: React.FC = () => {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <Icon name="recycle" size={40} color="#059669" />
          <Text style={styles.logoText}>Wastify</Text>
        </View>
        <Text style={styles.headerDesc}>
          Wastify adalah solusi pengelolaan limbah digital yang berfokus pada
          legalitas, transparansi, dan keberlanjutan bisnis. Kami menyediakan
          aplikasi waste monitoring B2B berbasis IoT dan AI analytics untuk
          membantu pelaku usaha mengelola limbah secara lebih efisien dan legal.
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.card}>
          <Icon name="target" size={28} color="#059669" />
          <Text style={styles.cardTitle}>Misi Kami</Text>
          <Text style={styles.cardDesc}>
            Membantu UMKM dan industri mengelola limbah B3 secara legal,
            terpantau, dan efisien melalui teknologi digital.
          </Text>
        </View>
        <View style={styles.card}>
          <Icon name="eye-outline" size={28} color="#059669" />
          <Text style={styles.cardTitle}>Visi Kami</Text>
          <Text style={styles.cardDesc}>
            Menjadi platform pengelolaan limbah digital terintegrasi dengan
            sistem regulasi manifes limbah Indonesia.
          </Text>
        </View>
        <View style={styles.card}>
          <Icon name="lightbulb-outline" size={28} color="#059669" />
          <Text style={styles.cardTitle}>Nilai Kami</Text>
          <Text style={styles.cardDesc}>
            Transparansi, inovasi teknologi, kepatuhan regulasi, dan
            keberlanjutan lingkungan.
          </Text>
        </View>
      </View>

      <View style={[styles.section, styles.sectionAlt]}>
        <Text style={styles.sectionTitle}>Segmen Konsumen</Text>
        <View style={styles.segmentCard}>
          <Text style={styles.segmentLabel}>Sasaran Utama</Text>
          <Text style={styles.segmentDesc}>
            Pelaku UMKM penghasil limbah B3 dengan volume menengah hingga tinggi
            yang membutuhkan pengelolaan legal.
          </Text>
        </View>
        <View style={[styles.segmentCard, styles.segmentCardAlt]}>
          <Text style={styles.segmentLabel}>Sasaran Sekunder</Text>
          {[
            'Industri katering komersial',
            'Fasilitas kesehatan',
            'Bengkel otomotif',
            'Industri skala menengah',
            'Komunitas atau kawasan industri',
          ].map((item) => (
            <View key={item} style={styles.bulletRow}>
              <View style={styles.bullet} />
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profil Persona</Text>
        <View style={styles.personaCard}>
          <View style={styles.personaHeader}>
            <Text style={styles.personaHeaderText}>Persona Pengguna</Text>
          </View>
          <View style={styles.personaBody}>
            {[
              ['Nama', 'Muslim'],
              ['Peran', 'Pemilik UMKM'],
              ['Usia', '35 tahun'],
              ['Pendidikan', 'SMA'],
              ['Media Sosial', 'TikTok'],
              ['Lokasi', 'Suburban'],
              ['Pekerjaan', 'Wiraswasta'],
              ['Tech Comfort', 'Tinggi'],
            ].map(([key, val]) => (
              <View key={key} style={styles.personaRow}>
                <Text style={styles.personaKey}>{key}</Text>
                <Text style={styles.personaVal}>{val}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {flex: 1, backgroundColor: '#fff'},
  scrollContent: {paddingBottom: 32},
  header: {padding: 20, paddingTop: 60, paddingBottom: 32, backgroundColor: '#f0fdf4'},
  logoRow: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16},
  logoText: {fontSize: 28, fontWeight: '700', color: '#065f46'},
  headerDesc: {fontSize: 15, color: '#4b5563', lineHeight: 24, textAlign: 'center'},
  section: {padding: 20, gap: 16},
  sectionAlt: {backgroundColor: '#f0fdf4'},
  sectionTitle: {fontSize: 22, fontWeight: '700', color: '#111827', marginBottom: 8},
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    padding: 20,
  },
  cardTitle: {fontSize: 17, fontWeight: '600', color: '#111827', marginTop: 12, marginBottom: 6},
  cardDesc: {fontSize: 14, color: '#4b5563', lineHeight: 22},
  segmentCard: {
    backgroundColor: '#f0fdf4',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    padding: 20,
  },
  segmentCardAlt: {
    backgroundColor: '#f0fdfa',
    borderColor: '#99f6e4',
  },
  segmentLabel: {fontSize: 16, fontWeight: '600', color: '#111827', marginBottom: 8},
  segmentDesc: {fontSize: 14, color: '#4b5563', lineHeight: 22},
  bulletRow: {flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 8},
  bullet: {width: 6, height: 6, borderRadius: 3, backgroundColor: '#14b8a6'},
  bulletText: {fontSize: 14, color: '#4b5563'},
  personaCard: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    overflow: 'hidden',
  },
  personaHeader: {backgroundColor: '#059669', padding: 16},
  personaHeaderText: {color: '#fff', fontSize: 16, fontWeight: '600'},
  personaBody: {padding: 16},
  personaRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
    paddingVertical: 10,
  },
  personaKey: {flex: 1, fontSize: 13, color: '#6b7280', fontWeight: '500'},
  personaVal: {flex: 2, fontSize: 13, color: '#111827'},
});

export default TentangScreen;
