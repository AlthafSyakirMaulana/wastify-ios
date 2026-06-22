import React, {useState, useMemo} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const historyData = [
  {id: 'HST-001', date: '20 Jun 2026', customer: 'PT. Maju Jaya', waste: 'Limbah B3', volume: '2.5 ton', status: 'completed', cost: 'Rp 2.500.000'},
  {id: 'HST-002', date: '19 Jun 2026', customer: 'CV. Sejahtera Abadi', waste: 'Limbah Organik', volume: '1.2 ton', status: 'completed', cost: 'Rp 1.200.000'},
  {id: 'HST-003', date: '18 Jun 2026', customer: 'UD. Berkah Terus', waste: 'Limbah Plastik', volume: '800 kg', status: 'completed', cost: 'Rp 800.000'},
  {id: 'HST-004', date: '17 Jun 2026', customer: 'PT. Hijau Lestari', waste: 'Limbah B3', volume: '3 ton', status: 'completed', cost: 'Rp 3.000.000'},
  {id: 'HST-005', date: '16 Jun 2026', customer: 'CV. Karya Mandiri', waste: 'Limbah Kertas', volume: '500 kg', status: 'completed', cost: 'Rp 500.000'},
  {id: 'HST-006', date: '15 Jun 2026', customer: 'PT. Maju Jaya', waste: 'Limbah B3', volume: '2 ton', status: 'completed', cost: 'Rp 2.000.000'},
  {id: 'HST-007', date: '14 Jun 2026', customer: 'CV. Sejahtera Abadi', waste: 'Limbah Organik', volume: '1 ton', status: 'completed', cost: 'Rp 1.000.000'},
  {id: 'HST-008', date: '13 Jun 2026', customer: 'UD. Berkah Terus', waste: 'Limbah Plastik', volume: '600 kg', status: 'completed', cost: 'Rp 600.000'},
];

const HistoricalScreen: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filterMonth, setFilterMonth] = useState('all');

  const filtered = useMemo(() => {
    return historyData.filter(h => {
      const matchSearch = h.customer.toLowerCase().includes(search.toLowerCase()) || h.id.toLowerCase().includes(search.toLowerCase());
      const matchMonth = filterMonth === 'all' || h.date.includes(filterMonth);
      return matchSearch && matchMonth;
    });
  }, [search, filterMonth]);

  const totalVolume = useMemo(() => {
    return filtered.reduce((sum, h) => {
      const num = parseFloat(h.volume.replace(/[^0-9.]/g, ''));
      const multiplier = h.volume.includes('kg') ? 0.001 : 1;
      return sum + num * multiplier;
    }, 0);
  }, [filtered]);

  const totalCost = useMemo(() => {
    return filtered.reduce((sum, h) => sum + parseInt(h.cost.replace(/[^0-9]/g, '')), 0);
  }, [filtered]);

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Historical Waste</Text>
        <Text style={styles.headerDesc}>Riwayat lengkap data pembuangan dan laporan kepatuhan.</Text>
      </View>

      <View style={styles.summaryRow}>
        <View style={styles.summaryCard}>
          <View style={[styles.summaryIcon, {backgroundColor: '#d1fae5'}]}>
            <Icon name="history" size={20} color="#059669" />
          </View>
          <Text style={styles.summaryValue}>{filtered.length}</Text>
          <Text style={styles.summaryLabel}>Total Transaksi</Text>
        </View>
        <View style={styles.summaryCard}>
          <View style={[styles.summaryIcon, {backgroundColor: '#dbeafe'}]}>
            <Icon name="history" size={20} color="#2563eb" />
          </View>
          <Text style={styles.summaryValue}>{totalVolume.toFixed(1)} ton</Text>
          <Text style={styles.summaryLabel}>Total Volume</Text>
        </View>
        <View style={styles.summaryCard}>
          <View style={[styles.summaryIcon, {backgroundColor: '#fef3c7'}]}>
            <Icon name="history" size={20} color="#d97706" />
          </View>
          <Text style={styles.summaryValue}>Rp {(totalCost / 1000000).toFixed(1)} Jt</Text>
          <Text style={styles.summaryLabel}>Total Biaya</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.filterRow}>
          <View style={styles.searchBox}>
            <Icon name="magnify" size={16} color="#9ca3af" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Cari pelanggan atau ID..."
              placeholderTextColor="#9ca3af"
              value={search}
              onChangeText={setSearch}
            />
          </View>
        </View>
        <View style={styles.filterRow}>
          <TouchableOpacity
            style={[styles.filterBtn, filterMonth === 'all' && styles.filterBtnActive]}
            onPress={() => setFilterMonth('all')}>
            <Text style={[styles.filterBtnText, filterMonth === 'all' && styles.filterBtnTextActive]}>Semua</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterBtn, filterMonth === 'Jun' && styles.filterBtnActive]}
            onPress={() => setFilterMonth('Jun')}>
            <Text style={[styles.filterBtnText, filterMonth === 'Jun' && styles.filterBtnTextActive]}>Juni 2026</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterBtn, filterMonth === 'Mei' && styles.filterBtnActive]}
            onPress={() => setFilterMonth('Mei')}>
            <Text style={[styles.filterBtnText, filterMonth === 'Mei' && styles.filterBtnTextActive]}>Mei 2026</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.exportBtn}>
            <Icon name="download" size={16} color="#fff" />
            <Text style={styles.exportBtnText}>Export</Text>
          </TouchableOpacity>
        </View>

        {filtered.map(h => (
          <View key={h.id} style={styles.historyRow}>
            <View style={styles.historyLeft}>
              <Text style={styles.historyId}>{h.id}</Text>
              <Text style={styles.historyDate}>{h.date}</Text>
            </View>
            <View style={styles.historyCenter}>
              <Text style={styles.historyCustomer}>{h.customer}</Text>
              <Text style={styles.historyWaste}>{h.waste}</Text>
            </View>
            <View style={styles.historyRight}>
              <Text style={styles.historyVolume}>{h.volume}</Text>
              <Text style={styles.historyCost}>{h.cost}</Text>
            </View>
            <TouchableOpacity style={styles.viewBtn}>
              <Icon name="file-document-outline" size={16} color="#9ca3af" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {flex: 1, backgroundColor: '#f0fdf4'},
  scrollContent: {paddingBottom: 32},
  header: {padding: 20, paddingTop: 60, paddingBottom: 24},
  headerTitle: {fontSize: 28, fontWeight: '700', color: '#111827', marginBottom: 8},
  headerDesc: {fontSize: 15, color: '#4b5563', lineHeight: 22},
  summaryRow: {flexDirection: 'row', paddingHorizontal: 20, gap: 12, marginBottom: 24},
  summaryCard: {
    flex: 1, backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#a7f3d0',
    padding: 16, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 4, elevation: 1,
  },
  summaryIcon: {width: 40, height: 40, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginBottom: 12},
  summaryValue: {fontSize: 18, fontWeight: '700', color: '#111827'},
  summaryLabel: {fontSize: 11, color: '#6b7280', marginTop: 4},
  card: {
    backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#a7f3d0',
    padding: 20, marginHorizontal: 20, marginBottom: 16,
  },
  filterRow: {flexDirection: 'row', gap: 8, marginBottom: 12, flexWrap: 'wrap'},
  searchBox: {flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, paddingHorizontal: 12},
  searchIcon: {marginRight: 8},
  searchInput: {flex: 1, paddingVertical: 10, fontSize: 13, color: '#111827'},
  filterBtn: {paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10, borderWidth: 1, borderColor: '#e5e7eb'},
  filterBtnActive: {backgroundColor: '#059669', borderColor: '#059669'},
  filterBtnText: {fontSize: 12, color: '#6b7280'},
  filterBtnTextActive: {color: '#fff'},
  exportBtn: {flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: '#059669', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10},
  exportBtnText: {fontSize: 12, fontWeight: '500', color: '#fff'},
  historyRow: {flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#f9fafb'},
  historyLeft: {width: 80},
  historyId: {fontSize: 12, fontWeight: '500', color: '#111827'},
  historyDate: {fontSize: 10, color: '#6b7280'},
  historyCenter: {flex: 1},
  historyCustomer: {fontSize: 12, color: '#111827'},
  historyWaste: {fontSize: 10, color: '#6b7280'},
  historyRight: {alignItems: 'flex-end'},
  historyVolume: {fontSize: 12, color: '#111827'},
  historyCost: {fontSize: 11, fontWeight: '500', color: '#111827'},
  viewBtn: {padding: 6},
});

export default HistoricalScreen;
