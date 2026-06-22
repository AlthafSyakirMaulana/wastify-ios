import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PasarScreen: React.FC = () => {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ukuran Pasar</Text>
        <Text style={styles.headerDesc}>
          Potensi pasar pengelolaan limbah di Indonesia sangat besar dengan nilai
          mencapai puluhan triliun rupiah.
        </Text>
      </View>

      <View style={styles.marketGrid}>
        {[
          {icon: 'trending-up', label: 'TAM', value: 'Rp50 - 80 T', desc: 'Pasar pengelolaan limbah Indonesia'},
          {icon: 'domain', label: 'SAM', value: 'Rp3 - 5 T', desc: 'UMKM dan industri skala menengah'},
          {icon: 'target', label: 'SOM', value: 'Rp3 M', desc: 'Jawa Timur dan Jabodetabek tahun pertama'},
        ].map((item) => (
          <View key={item.label} style={styles.marketCard}>
            <Icon name={item.icon as any} size={36} color="#059669" />
            <Text style={styles.marketLabel}>{item.label}</Text>
            <Text style={styles.marketValue}>{item.value}</Text>
            <Text style={styles.marketDesc}>{item.desc}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Analisis Kompetitor</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCell, styles.tableHeaderCell, {flex: 1.5}]}>Pesaing</Text>
            <Text style={[styles.tableCell, styles.tableHeaderCell, {flex: 1}]}>IoT</Text>
            <Text style={[styles.tableCell, styles.tableHeaderCell, {flex: 1}]}>Dashboard</Text>
            <Text style={[styles.tableCell, styles.tableHeaderCell, {flex: 1}]}>UMKM</Text>
            <Text style={[styles.tableCell, styles.tableHeaderCell, {flex: 1}]}>Harga</Text>
          </View>
          {[
            ['Waste4Change', 'Tidak', 'Tidak', 'Ya', 'Tidak'],
            ['BANKSAMPAH.ID', 'Tidak', 'Ya', 'Ya', 'Ya'],
            ['PeduliSampah.id', 'Tidak', 'Ya', 'Ya', 'Ya'],
            ['Bank Sampah Lokal', 'Tidak', 'Tidak', 'Ya', 'Ya'],
          ].map((row) => (
            <View key={row[0]} style={styles.tableRow}>
              <Text style={[styles.tableCell, {flex: 1.5}]}>{row[0]}</Text>
              {row.slice(1).map((cell, j) => (
                <Text
                  key={j}
                  style={[
                    styles.tableCell,
                    {flex: 1, textAlign: 'center'},
                    cell === 'Ya' ? styles.yes : styles.no,
                  ]}>
                  {cell}
                </Text>
              ))}
            </View>
          ))}
          <View style={[styles.tableRow, styles.wastifyRow]}>
            <Text style={[styles.tableCell, {flex: 1.5, fontWeight: '700', color: '#065f46'}]}>Wastify</Text>
            {['Ya', 'Ya', 'Ya', 'Ya'].map((cell, j) => (
              <Text key={j} style={[styles.tableCell, {flex: 1, textAlign: 'center', fontWeight: '700', color: '#059669'}]}>{cell}</Text>
            ))}
          </View>
        </View>
        <Text style={styles.tableNote}>
          Wastify menonjol karena menggabungkan IoT monitoring, dashboard digital,
          fokus pada UMKM, dan harga yang lebih terjangkau.
        </Text>
      </View>

      <View style={[styles.section, styles.sectionAlt]}>
        <Text style={styles.sectionTitle}>Validasi Pasar</Text>
        <View style={styles.validationCard}>
          <Text style={styles.validationDesc}>
            Wastify menargetkan pelaku usaha yang menghasilkan limbah dalam jumlah
            menengah hingga tinggi, khususnya limbah B3.
          </Text>
          <View style={styles.tagGrid}>
            {['UMKM', 'Industri Katering', 'Fasilitas Kesehatan', 'Bengkel Otomotif'].map(
              (item) => (
                <View key={item} style={styles.tag}>
                  <Text style={styles.tagText}>{item}</Text>
                </View>
              ),
            )}
          </View>
        </View>
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
  marketGrid: {paddingHorizontal: 20, gap: 12, marginBottom: 32},
  marketCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    padding: 20,
    alignItems: 'center',
  },
  marketLabel: {fontSize: 12, fontWeight: '600', color: '#059669', letterSpacing: 1, marginTop: 12, marginBottom: 4},
  marketValue: {fontSize: 24, fontWeight: '700', color: '#111827', marginBottom: 4},
  marketDesc: {fontSize: 13, color: '#6b7280'},
  section: {padding: 20},
  sectionAlt: {backgroundColor: '#fff'},
  sectionTitle: {fontSize: 22, fontWeight: '700', color: '#111827', marginBottom: 16},
  table: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    overflow: 'hidden',
  },
  tableHeader: {flexDirection: 'row', backgroundColor: '#059669'},
  tableHeaderCell: {color: '#fff', fontWeight: '600', fontSize: 12, padding: 12},
  tableRow: {flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f3f4f6'},
  tableCell: {fontSize: 12, padding: 12},
  yes: {color: '#059669', fontWeight: '500'},
  no: {color: '#f87171'},
  wastifyRow: {backgroundColor: '#f0fdf4', borderTopWidth: 2, borderTopColor: '#a7f3d0'},
  tableNote: {fontSize: 12, color: '#6b7280', textAlign: 'center', marginTop: 12, lineHeight: 18},
  validationCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    padding: 20,
  },
  validationDesc: {fontSize: 14, color: '#4b5563', lineHeight: 22, marginBottom: 16},
  tagGrid: {flexDirection: 'row', flexWrap: 'wrap', gap: 8},
  tag: {
    backgroundColor: '#f0fdf4',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  tagText: {fontSize: 13, fontWeight: '500', color: '#065f46'},
});

export default PasarScreen;
