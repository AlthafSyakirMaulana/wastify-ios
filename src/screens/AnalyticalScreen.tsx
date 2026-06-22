import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const kpiCards = [
  {label: 'Akurasi Prediksi', value: '92%', icon: 'chart-bar', color: '#059669', bg: '#d1fae5'},
  {label: 'Efisiensi Operasional', value: '+35%', icon: 'trending-up', color: '#2563eb', bg: '#dbeafe'},
  {label: 'Rekomendasi Aktif', value: '12', icon: 'lightbulb-on-outline', color: '#d97706', bg: '#fef3c7'},
];

const predictions = [
  {month: 'Jul 2026', predicted: 13.2},
  {month: 'Agu 2026', predicted: 14.1},
  {month: 'Sep 2026', predicted: 12.8},
  {month: 'Okt 2026', predicted: 15.3},
  {month: 'Nov 2026', predicted: 14.7},
  {month: 'Des 2026', predicted: 16.2},
];

const recommendations = [
  {icon: 'calendar-check', title: 'Optimasi Jadwal', desc: 'Kurangi jadwal penjemputan di hari Sabtu karena volume turun 30%', impact: 'Hemat 15% biaya operasional'},
  {icon: 'trending-down', title: 'Reduksi Limbah Plastik', desc: 'Terapkan program daur ulang untuk pelanggan dengan volume plastik tinggi', impact: 'Kurangi 20% limbah ke TPA'},
  {icon: 'lightbulb-on-outline', title: 'Efisiensi Rute', desc: 'Gabungkan penjemputan di wilayah Sidoarjo dan Gresik pada hari yang sama', impact: 'Hemat 25% bahan bakar'},
];

const maxPrediction = Math.max(...predictions.map(p => p.predicted));

const AnalyticalScreen: React.FC = () => {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Analytical Services</Text>
        <Text style={styles.headerDesc}>Prediksi volume limbah dan optimasi operasional berbasis AI.</Text>
      </View>

      <View style={styles.kpiRow}>
        {kpiCards.map(card => (
          <View key={card.label} style={styles.kpiCard}>
            <View style={[styles.kpiIcon, {backgroundColor: card.bg}]}>
              <Icon name={card.icon as any} size={20} color={card.color} />
            </View>
            <Text style={styles.kpiValue}>{card.value}</Text>
            <Text style={styles.kpiLabel}>{card.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Prediksi Volume Limbah (ton)</Text>
        <View style={styles.chart}>
          {predictions.map(p => (
            <View key={p.month} style={styles.chartCol}>
              <Text style={styles.chartValue}>{p.predicted}</Text>
              <View style={[styles.chartBar, {height: `${(p.predicted / maxPrediction) * 100}%`}]} />
              <Text style={styles.chartLabel}>{p.month}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.chartNote}>Prediksi 6 bulan ke depan berdasarkan data historis</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Rekomendasi AI</Text>
        {recommendations.map(rec => (
          <View key={rec.title} style={styles.recRow}>
            <View style={styles.recIcon}>
              <Icon name={rec.icon as any} size={18} color="#059669" />
            </View>
            <View style={styles.recContent}>
              <Text style={styles.recTitle}>{rec.title}</Text>
              <Text style={styles.recDesc}>{rec.desc}</Text>
              <View style={styles.impactBadge}>
                <Text style={styles.impactText}>{rec.impact}</Text>
              </View>
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
  kpiRow: {flexDirection: 'row', paddingHorizontal: 20, gap: 12, marginBottom: 24},
  kpiCard: {
    flex: 1, backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#a7f3d0',
    padding: 16, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 4, elevation: 1,
  },
  kpiIcon: {width: 40, height: 40, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginBottom: 12},
  kpiValue: {fontSize: 22, fontWeight: '700', color: '#111827'},
  kpiLabel: {fontSize: 11, color: '#6b7280', marginTop: 4},
  card: {
    backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#a7f3d0',
    padding: 20, marginHorizontal: 20, marginBottom: 16,
  },
  cardTitle: {fontSize: 16, fontWeight: '600', color: '#111827', marginBottom: 16},
  chart: {flexDirection: 'row', alignItems: 'flex-end', height: 160, gap: 6},
  chartCol: {flex: 1, alignItems: 'center', gap: 4},
  chartValue: {fontSize: 10, color: '#6b7280'},
  chartBar: {width: '100%', backgroundColor: '#10b981', borderRadius: 6, minHeight: 4, opacity: 0.8},
  chartLabel: {fontSize: 10, fontWeight: '500', color: '#4b5563', textAlign: 'center'},
  chartNote: {fontSize: 11, color: '#9ca3af', textAlign: 'center', marginTop: 12},
  recRow: {flexDirection: 'row', gap: 12, padding: 12, backgroundColor: '#f9fafb', borderRadius: 12, marginBottom: 8},
  recIcon: {width: 32, height: 32, backgroundColor: '#d1fae5', borderRadius: 8, alignItems: 'center', justifyContent: 'center'},
  recContent: {flex: 1},
  recTitle: {fontSize: 13, fontWeight: '500', color: '#111827'},
  recDesc: {fontSize: 11, color: '#6b7280', marginTop: 2},
  impactBadge: {alignSelf: 'flex-start', backgroundColor: '#d1fae5', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 999, marginTop: 4},
  impactText: {fontSize: 11, fontWeight: '500', color: '#059669'},
});

export default AnalyticalScreen;
