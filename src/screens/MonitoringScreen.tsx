import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const summaryCards = [
  {label: 'Total Limbah Hari Ini', value: '9.3 ton', change: '+12%', icon: 'delete-variant', color: '#059669', bg: '#d1fae5'},
  {label: 'Limbah Diproses', value: '7.1 ton', change: '76%', icon: 'progress-check', color: '#2563eb', bg: '#dbeafe'},
  {label: 'Dalam Antrian', value: '2.2 ton', change: '24%', icon: 'clock-outline', color: '#d97706', bg: '#fef3c7'},
  {label: 'Peringatan Kapasitas', value: '3', change: '+1', icon: 'alert-triangle', color: '#dc2626', bg: '#fee2e2'},
];

const wasteData = [
  {type: 'Limbah B3', volume: '4.2 ton', percentage: 45, color: '#ef4444'},
  {type: 'Limbah Organik', volume: '2.8 ton', percentage: 30, color: '#10b981'},
  {type: 'Limbah Plastik', volume: '1.5 ton', percentage: 16, color: '#f59e0b'},
  {type: 'Limbah Kertas', volume: '0.8 ton', percentage: 9, color: '#3b82f6'},
];

const trendData = [
  {day: 'Sen', value: 7.2},
  {day: 'Sel', value: 8.5},
  {day: 'Rab', value: 6.8},
  {day: 'Kam', value: 9.1},
  {day: 'Jum', value: 7.9},
  {day: 'Sab', value: 5.2},
  {day: 'Min', value: 4.8},
];

const recentActivity = [
  {id: 'ACT-001', location: 'PT. Maju Jaya - Surabaya', waste: 'Limbah B3', volume: '500 kg', time: '10 menit lalu', status: 'completed'},
  {id: 'ACT-002', location: 'CV. Sejahtera Abadi - Sidoarjo', waste: 'Limbah Organik', volume: '300 kg', time: '25 menit lalu', status: 'completed'},
  {id: 'ACT-003', location: 'UD. Berkah Terus - Gresik', waste: 'Limbah Plastik', volume: '200 kg', time: '1 jam lalu', status: 'in_progress'},
  {id: 'ACT-004', location: 'PT. Hijau Lestari - Pasuruan', waste: 'Limbah B3', volume: '750 kg', time: '2 jam lalu', status: 'scheduled'},
];

const maxTrend = Math.max(...trendData.map(d => d.value));

const MonitoringScreen: React.FC = () => {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Waste Monitoring</Text>
        <Text style={styles.headerDesc}>Pantau volume limbah secara real-time dari mana saja.</Text>
      </View>

      <View style={styles.summaryGrid}>
        {summaryCards.map(card => (
          <View key={card.label} style={styles.summaryCard}>
            <View style={[styles.summaryIcon, {backgroundColor: card.bg}]}>
              <Icon name={card.icon as any} size={20} color={card.color} />
            </View>
            <Text style={styles.summaryValue}>{card.value}</Text>
            <Text style={styles.summaryLabel}>{card.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.sectionRow}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Komposisi Limbah</Text>
          {wasteData.map(w => (
            <View key={w.type} style={styles.wasteRow}>
              <View style={styles.wasteHeader}>
                <Text style={styles.wasteType}>{w.type}</Text>
                <Text style={styles.wasteVolume}>{w.volume} ({w.percentage}%)</Text>
              </View>
              <View style={styles.barBg}>
                <View style={[styles.barFill, {width: `${w.percentage}%`, backgroundColor: w.color}]} />
              </View>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tren Volume (7 Hari)</Text>
          <View style={styles.chart}>
            {trendData.map(d => (
              <View key={d.day} style={styles.chartCol}>
                <Text style={styles.chartValue}>{d.value}</Text>
                <View style={[styles.chartBar, {height: `${(d.value / maxTrend) * 100}%`}]} />
                <Text style={styles.chartDay}>{d.day}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Aktivitas Terkini</Text>
        {recentActivity.map(act => (
          <View key={act.id} style={styles.activityRow}>
            <View style={[styles.activityIcon, {
              backgroundColor: act.status === 'completed' ? '#d1fae5' : act.status === 'in_progress' ? '#dbeafe' : '#fef3c7'
            }]}>
              <Icon name="delete-variant" size={16} color={
                act.status === 'completed' ? '#059669' : act.status === 'in_progress' ? '#2563eb' : '#d97706'
              } />
            </View>
            <View style={styles.activityContent}>
              <Text style={styles.activityLocation}>{act.location}</Text>
              <Text style={styles.activityMeta}>{act.waste} · {act.volume} · {act.time}</Text>
            </View>
            <View style={[styles.statusBadge, {
              backgroundColor: act.status === 'completed' ? '#d1fae5' : act.status === 'in_progress' ? '#dbeafe' : '#fef3c7'
            }]}>
              <Text style={[styles.statusText, {
                color: act.status === 'completed' ? '#059669' : act.status === 'in_progress' ? '#2563eb' : '#d97706'
              }]}>
                {act.status === 'completed' ? 'Selesai' : act.status === 'in_progress' ? 'Diproses' : 'Terjadwal'}
              </Text>
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
  header: {padding: 20, paddingTop: 60, paddingBottom: 24},
  headerTitle: {fontSize: 28, fontWeight: '700', color: '#111827', marginBottom: 8},
  headerDesc: {fontSize: 15, color: '#4b5563', lineHeight: 22},
  summaryGrid: {flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, gap: 12, marginBottom: 24},
  summaryCard: {
    width: '47%', backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#a7f3d0',
    padding: 16, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 4, elevation: 1,
  },
  summaryIcon: {width: 40, height: 40, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginBottom: 12},
  summaryValue: {fontSize: 22, fontWeight: '700', color: '#111827'},
  summaryLabel: {fontSize: 11, color: '#6b7280', marginTop: 4},
  sectionRow: {paddingHorizontal: 20, gap: 16, marginBottom: 24},
  card: {
    backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#a7f3d0',
    padding: 20, marginHorizontal: 20, marginBottom: 16,
  },
  cardTitle: {fontSize: 16, fontWeight: '600', color: '#111827', marginBottom: 16},
  wasteRow: {marginBottom: 12},
  wasteHeader: {flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4},
  wasteType: {fontSize: 13, color: '#374151'},
  wasteVolume: {fontSize: 12, color: '#6b7280'},
  barBg: {height: 10, backgroundColor: '#f3f4f6', borderRadius: 999},
  barFill: {height: 10, borderRadius: 999},
  chart: {flexDirection: 'row', alignItems: 'flex-end', height: 160, gap: 6},
  chartCol: {flex: 1, alignItems: 'center', gap: 4},
  chartValue: {fontSize: 10, color: '#6b7280'},
  chartBar: {width: '100%', backgroundColor: '#10b981', borderRadius: 6, minHeight: 4},
  chartDay: {fontSize: 11, fontWeight: '500', color: '#4b5563'},
  activityRow: {flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#f9fafb'},
  activityIcon: {width: 32, height: 32, borderRadius: 8, alignItems: 'center', justifyContent: 'center'},
  activityContent: {flex: 1},
  activityLocation: {fontSize: 13, fontWeight: '500', color: '#111827'},
  activityMeta: {fontSize: 11, color: '#6b7280', marginTop: 2},
  statusBadge: {paddingHorizontal: 8, paddingVertical: 3, borderRadius: 999},
  statusText: {fontSize: 11, fontWeight: '500'},
});

export default MonitoringScreen;
