import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const summaryCards = [
  {label: 'Total Limbah Diproses', value: '12.5 ton', change: '+8%', icon: 'delete-variant', color: '#059669', bg: '#d1fae5', trend: 'up'},
  {label: 'Pelanggan Aktif', value: '24', change: '+3', icon: 'office-building', color: '#2563eb', bg: '#dbeafe', trend: 'up'},
  {label: 'Pengaduan Bulan Ini', value: '2', change: '-50%', icon: 'alert-triangle', color: '#d97706', bg: '#fef3c7', trend: 'down'},
  {label: 'Tingkat Kepatuhan', value: '94%', change: '+2%', icon: 'chart-bar', color: '#7c3aed', bg: '#ede9fe', trend: 'up'},
];

const monthlyData = [
  {month: 'Jan', waste: 8.2, revenue: 8200},
  {month: 'Feb', waste: 9.1, revenue: 9100},
  {month: 'Mar', waste: 7.8, revenue: 7800},
  {month: 'Apr', waste: 10.5, revenue: 10500},
  {month: 'Mei', waste: 11.2, revenue: 11200},
  {month: 'Jun', waste: 12.5, revenue: 12500},
];

const wasteTypeData = [
  {type: 'Limbah B3', percentage: 45, color: '#ef4444'},
  {type: 'Limbah Organik', percentage: 25, color: '#10b981'},
  {type: 'Limbah Plastik', percentage: 18, color: '#f59e0b'},
  {type: 'Limbah Kertas', percentage: 12, color: '#3b82f6'},
];

const topCustomers = [
  {name: 'PT. Maju Jaya', total: '4.5 ton', revenue: 'Rp 4.700.000'},
  {name: 'PT. Hijau Lestari', total: '3 ton', revenue: 'Rp 3.000.000'},
  {name: 'CV. Sejahtera Abadi', total: '2.4 ton', revenue: 'Rp 2.400.000'},
  {name: 'UD. Berkah Terus', total: '1.6 ton', revenue: 'Rp 1.600.000'},
];

const periods = [
  {key: '1m', label: '1 Bulan'},
  {key: '3m', label: '3 Bulan'},
  {key: '6m', label: '6 Bulan'},
  {key: '1y', label: '1 Tahun'},
];

const maxWaste = Math.max(...monthlyData.map(d => d.waste));

const AnalyticsScreen: React.FC = () => {
  const [period, setPeriod] = useState('6m');

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Analytics Report</Text>
          <Text style={styles.headerDesc}>Laporan dan analisis pengelolaan limbah Anda.</Text>
        </View>
        <View style={styles.headerActions}>
          <View style={styles.periodRow}>
            {periods.map(p => (
              <TouchableOpacity
                key={p.key}
                style={[styles.periodBtn, period === p.key && styles.periodBtnActive]}
                onPress={() => setPeriod(p.key)}>
                <Text style={[styles.periodBtnText, period === p.key && styles.periodBtnTextActive]}>{p.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity style={styles.exportBtn}>
            <Icon name="download" size={16} color="#fff" />
            <Text style={styles.exportBtnText}>Export</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.summaryGrid}>
        {summaryCards.map(card => (
          <View key={card.label} style={styles.summaryCard}>
            <View style={styles.summaryTop}>
              <View style={[styles.summaryIcon, {backgroundColor: card.bg}]}>
                <Icon name={card.icon as any} size={20} color={card.color} />
              </View>
              <View style={[styles.trendBadge, {
                backgroundColor: card.trend === 'up' ? '#d1fae5' : '#fee2e2'
              }]}>
                <Icon name={card.trend === 'up' ? 'trending-up' : 'trending-down'} size={12} color={card.trend === 'up' ? '#059669' : '#dc2626'} />
                <Text style={[styles.trendText, {
                  color: card.trend === 'up' ? '#059669' : '#dc2626'
                }]}>{card.change}</Text>
              </View>
            </View>
            <Text style={styles.summaryValue}>{card.value}</Text>
            <Text style={styles.summaryLabel}>{card.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.chartRow}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Volume Limbah per Bulan (ton)</Text>
          <View style={styles.chart}>
            {monthlyData.map(d => (
              <View key={d.month} style={styles.chartCol}>
                <Text style={styles.chartValue}>{d.waste}</Text>
                <View style={[styles.chartBar, {height: `${(d.waste / maxWaste) * 100}%`}]} />
                <Text style={styles.chartLabel}>{d.month}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Komposisi Jenis Limbah</Text>
          {wasteTypeData.map(w => (
            <View key={w.type} style={styles.wasteRow}>
              <View style={styles.wasteHeader}>
                <Text style={styles.wasteType}>{w.type}</Text>
                <Text style={styles.wastePercent}>{w.percentage}%</Text>
              </View>
              <View style={styles.barBg}>
                <View style={[styles.barFill, {width: `${w.percentage}%`, backgroundColor: w.color}]} />
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Pelanggan Teratas</Text>
        {topCustomers.map(c => (
          <View key={c.name} style={styles.customerRow}>
            <Text style={styles.customerName}>{c.name}</Text>
            <Text style={styles.customerTotal}>{c.total}</Text>
            <Text style={styles.customerRevenue}>{c.revenue}</Text>
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
  headerActions: {marginTop: 16, gap: 12},
  periodRow: {flexDirection: 'row', gap: 6},
  periodBtn: {paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, borderWidth: 1, borderColor: '#e5e7eb', backgroundColor: '#fff'},
  periodBtnActive: {backgroundColor: '#059669', borderColor: '#059669'},
  periodBtnText: {fontSize: 11, color: '#6b7280'},
  periodBtnTextActive: {color: '#fff'},
  exportBtn: {flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: '#059669', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 10, alignSelf: 'flex-start'},
  exportBtnText: {fontSize: 12, fontWeight: '500', color: '#fff'},
  summaryGrid: {flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, gap: 12, marginBottom: 24},
  summaryCard: {
    width: '47%', backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#a7f3d0',
    padding: 16, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 4, elevation: 1,
  },
  summaryTop: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12},
  summaryIcon: {width: 40, height: 40, borderRadius: 12, alignItems: 'center', justifyContent: 'center'},
  trendBadge: {flexDirection: 'row', alignItems: 'center', gap: 2, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 999},
  trendText: {fontSize: 10, fontWeight: '500'},
  summaryValue: {fontSize: 22, fontWeight: '700', color: '#111827'},
  summaryLabel: {fontSize: 11, color: '#6b7280', marginTop: 4},
  chartRow: {paddingHorizontal: 20, gap: 16, marginBottom: 16},
  card: {
    backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#a7f3d0',
    padding: 20, marginHorizontal: 20, marginBottom: 16,
  },
  cardTitle: {fontSize: 16, fontWeight: '600', color: '#111827', marginBottom: 16},
  chart: {flexDirection: 'row', alignItems: 'flex-end', height: 160, gap: 6},
  chartCol: {flex: 1, alignItems: 'center', gap: 4},
  chartValue: {fontSize: 10, color: '#6b7280'},
  chartBar: {width: '100%', backgroundColor: '#10b981', borderRadius: 6, minHeight: 4},
  chartLabel: {fontSize: 11, fontWeight: '500', color: '#4b5563'},
  wasteRow: {marginBottom: 12},
  wasteHeader: {flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4},
  wasteType: {fontSize: 13, color: '#374151'},
  wastePercent: {fontSize: 12, color: '#6b7280'},
  barBg: {height: 10, backgroundColor: '#f3f4f6', borderRadius: 999},
  barFill: {height: 10, borderRadius: 999},
  customerRow: {flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#f9fafb'},
  customerName: {flex: 1, fontSize: 13, fontWeight: '500', color: '#111827'},
  customerTotal: {flex: 1, fontSize: 12, color: '#6b7280'},
  customerRevenue: {fontSize: 13, fontWeight: '500', color: '#111827'},
});

export default AnalyticsScreen;
