import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const KeuanganScreen: React.FC = () => {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Proyeksi Keuangan</Text>
        <Text style={styles.headerDesc}>
          Simulasi proyeksi keuangan Wastify untuk tiga tahun pertama.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Target Penjualan Tahun Pertama</Text>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCell, styles.tableHeaderCell, {flex: 2}]}>Produk/Layanan</Text>
            <Text style={[styles.tableCell, styles.tableHeaderCell, {flex: 1, textAlign: 'right'}]}>Target</Text>
            <Text style={[styles.tableCell, styles.tableHeaderCell, {flex: 1}]}>Satuan</Text>
          </View>
          {[
            ['Waste management limbah rumah tangga/umum', '1.840', 'Unit'],
            ['Waste management limbah B3', '431', 'Unit'],
            ['Waste Monitor', '1.840', 'Unit'],
            ['Legal Assistant', '166', 'Unit'],
          ].map((row) => (
            <View key={row[0]} style={styles.tableRow}>
              <Text style={[styles.tableCell, {flex: 2}]}>{row[0]}</Text>
              <Text style={[styles.tableCell, {flex: 1, textAlign: 'right', fontWeight: '500'}]}>{row[1]}</Text>
              <Text style={[styles.tableCell, {flex: 1, color: '#6b7280'}]}>{row[2]}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.revenueCard}>
          <View style={styles.revenueHeader}>
            <Icon name="trending-up" size={22} color="#059669" />
            <Text style={styles.revenueTitle}>Potensi Pendapatan</Text>
          </View>
          <View style={styles.revenueTable}>
            <View style={styles.revenueRow}>
              <Text style={styles.revenueLabel}>Periode</Text>
              <Text style={styles.revenueLabel}>Pendapatan</Text>
            </View>
            {[
              ['Tahun Pertama', 'IDR 2.760.000.000'],
              ['Tahun Kedua', 'IDR 4.830.000.000'],
              ['Tahun Ketiga', 'IDR 6.210.000.000'],
              ['Akumulatif 3 Tahun', 'IDR 13.800.000.000'],
            ].map(([period, revenue]) => (
              <View key={period} style={styles.revenueRow}>
                <Text style={styles.revenuePeriod}>{period}</Text>
                <Text style={styles.revenueValue}>{revenue}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.revenueCard}>
          <View style={styles.revenueHeader}>
            <Icon name="chart-pie" size={22} color="#059669" />
            <Text style={styles.revenueTitle}>Distribusi Keuangan</Text>
          </View>
          {[
            ['HPP', '55%'],
            ['Biaya akuisisi konsumen', '4%'],
            ['Biaya gaji', '23%'],
            ['Biaya overhead', '8%'],
            ['Biaya pajak', '3%'],
            ['Biaya bunga', '2%'],
            ['Laba', '5%'],
          ].map(([item, pct]) => (
            <View key={item} style={styles.barRow}>
              <View style={styles.barLabel}>
                <Text style={styles.barText}>{item}</Text>
                <Text style={styles.barPct}>{pct}</Text>
              </View>
              <View style={styles.barBg}>
                <View
                  style={[
                    styles.barFill,
                    {width: pct as any, backgroundColor: item === 'Laba' ? '#059669' : '#6ee7b7'},
                  ]}
                />
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.revenueCard}>
          <View style={styles.revenueHeader}>
            <Icon name="currency-usd" size={22} color="#059669" />
            <Text style={styles.revenueTitle}>Gross Profit</Text>
          </View>
          <View style={styles.revenueTable}>
            <View style={styles.revenueRow}>
              <Text style={styles.revenueLabel}>Tahun</Text>
              <Text style={styles.revenueLabel}>Gross Profit</Text>
            </View>
            {[
              ['Tahun 1', 'IDR 1.307.636.853'],
              ['Tahun 2', 'IDR 3.256.775.632'],
              ['Tahun 3', 'IDR 4.479.453.196'],
            ].map(([year, profit]) => (
              <View key={year} style={styles.revenueRow}>
                <Text style={styles.revenuePeriod}>{year}</Text>
                <Text style={styles.revenueValue}>{profit}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.revenueCard}>
          <View style={styles.revenueHeader}>
            <Icon name="chart-bar" size={22} color="#059669" />
            <Text style={styles.revenueTitle}>Break Even Point</Text>
          </View>
          <View style={styles.revenueTable}>
            <View style={styles.revenueRow}>
              <Text style={styles.revenueLabel}>Tahun</Text>
              <Text style={styles.revenueLabel}>BEP per Tahun</Text>
            </View>
            {[
              ['Tahun 1', '1.874 unit'],
              ['Tahun 2', '2.006 unit'],
              ['Tahun 3', '2.206 unit'],
            ].map(([year, bep]) => (
              <View key={year} style={styles.revenueRow}>
                <Text style={styles.revenuePeriod}>{year}</Text>
                <Text style={styles.revenueValue}>{bep}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Informasi Tambahan</Text>
          <View style={styles.infoGrid}>
            {[
              ['Periode pengembalian', '268,45 bulan'],
              ['Biaya akuisisi pembeli baru / CAC', 'IDR 0'],
              ['EBITDA tahun pertama', 'IDR 323.636.805'],
              ['Pertumbuhan pendapatan tahun kedua', '74%'],
              ['Pertumbuhan pendapatan tahun ketiga', '29%'],
            ].map(([label, value]) => (
              <View key={label} style={styles.infoItem}>
                <Text style={styles.infoLabel}>{label}</Text>
                <Text style={styles.infoValue}>{value}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.disclaimer}>
            Data pada halaman ini merupakan simulasi dan tidak menggambarkan
            kondisi keuangan perusahaan sesungguhnya.
          </Text>
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
  section: {padding: 20, gap: 16},
  sectionTitle: {fontSize: 18, fontWeight: '700', color: '#111827', marginBottom: 8},
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
  revenueCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    padding: 20,
  },
  revenueHeader: {flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16},
  revenueTitle: {fontSize: 17, fontWeight: '700', color: '#111827'},
  revenueTable: {},
  revenueRow: {flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#f3f4f6'},
  revenueLabel: {fontSize: 13, fontWeight: '600', color: '#6b7280'},
  revenuePeriod: {fontSize: 13, color: '#111827'},
  revenueValue: {fontSize: 13, color: '#111827', fontWeight: '500'},
  barRow: {marginBottom: 12},
  barLabel: {flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4},
  barText: {fontSize: 13, color: '#4b5563'},
  barPct: {fontSize: 13, fontWeight: '500', color: '#111827'},
  barBg: {height: 8, backgroundColor: '#f3f4f6', borderRadius: 4},
  barFill: {height: 8, borderRadius: 4},
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    padding: 20,
  },
  infoTitle: {fontSize: 17, fontWeight: '700', color: '#111827', marginBottom: 16},
  infoGrid: {gap: 12},
  infoItem: {
    backgroundColor: '#f0fdf4',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    padding: 12,
  },
  infoLabel: {fontSize: 11, fontWeight: '600', color: '#059669', letterSpacing: 0.5, marginBottom: 4},
  infoValue: {fontSize: 16, fontWeight: '700', color: '#111827'},
  disclaimer: {fontSize: 11, color: '#9ca3af', fontStyle: 'italic', marginTop: 16},
});

export default KeuanganScreen;
