import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const months = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];

const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

const dummySchedules = [
  {id: 1, customer: 'PT. Maju Jaya', address: 'Jl. Raya Industri No. 10, Surabaya', waste: 'Limbah B3', time: '09:00 - 11:00', date: 15, status: 'confirmed'},
  {id: 2, customer: 'CV. Sejahtera Abadi', address: 'Jl. Merdeka No. 25, Sidoarjo', waste: 'Limbah Organik', time: '10:00 - 12:00', date: 15, status: 'confirmed'},
  {id: 3, customer: 'UD. Berkah Terus', address: 'Jl. Ahmad Yani No. 88, Gresik', waste: 'Limbah Plastik', time: '13:00 - 14:30', date: 16, status: 'pending'},
  {id: 4, customer: 'PT. Hijau Lestari', address: 'Jl. Industri No. 5, Pasuruan', waste: 'Limbah B3', time: '08:00 - 10:00', date: 17, status: 'confirmed'},
  {id: 5, customer: 'CV. Karya Mandiri', address: 'Jl. Raya Tropodo, Mojokerto', waste: 'Limbah Kertas', time: '11:00 - 12:30', date: 18, status: 'pending'},
];

const SchedulingScreen: React.FC = () => {
  const [month, setMonth] = useState(5);
  const [year] = useState(2026);
  const [selectedDate, setSelectedDate] = useState<number | null>(15);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const schedulesForSelected = dummySchedules.filter(s => s.date === selectedDate);

  const datesWithSchedules = dummySchedules.map(s => s.date);

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Penjadwalan</Text>
        <Text style={styles.headerDesc}>Atur dan kelola jadwal penjemputan limbah Anda.</Text>
      </View>

      <View style={styles.calendarCard}>
        <View style={styles.calendarHeader}>
          <TouchableOpacity onPress={() => setMonth(m => (m === 0 ? 11 : m - 1))}>
            <Icon name="chevron-left" size={24} color="#6b7280" />
          </TouchableOpacity>
          <Text style={styles.calendarTitle}>{months[month]} {year}</Text>
          <TouchableOpacity onPress={() => setMonth(m => (m === 11 ? 0 : m + 1))}>
            <Icon name="chevron-right" size={24} color="#6b7280" />
          </TouchableOpacity>
        </View>

        <View style={styles.dayNamesRow}>
          {dayNames.map(d => (
            <View key={d} style={styles.dayNameCol}>
              <Text style={styles.dayNameText}>{d}</Text>
            </View>
          ))}
        </View>

        <View style={styles.daysGrid}>
          {Array.from({length: firstDay}).map((_, i) => (
            <View key={`empty-${i}`} style={styles.dayCol} />
          ))}
          {Array.from({length: daysInMonth}).map((_, i) => {
            const day = i + 1;
            const hasSchedule = datesWithSchedules.includes(day);
            const isSelected = selectedDate === day;
            return (
              <TouchableOpacity
                key={day}
                style={[styles.dayCol, isSelected && styles.daySelected, hasSchedule && !isSelected && styles.dayHasSchedule]}
                onPress={() => setSelectedDate(day)}>
                <Text style={[styles.dayText, isSelected && styles.dayTextSelected, hasSchedule && !isSelected && styles.dayTextHasSchedule]}>
                  {day}
                </Text>
                {hasSchedule && !isSelected && <View style={styles.dayDot} />}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={styles.scheduleCard}>
        <View style={styles.scheduleHeader}>
          <Icon name="calendar" size={20} color="#059669" />
          <Text style={styles.scheduleTitle}>
            Jadwal {months[month]} {selectedDate || ''}
          </Text>
        </View>

        {schedulesForSelected.length === 0 ? (
          <View style={styles.emptyState}>
            <Icon name="calendar" size={48} color="#d1d5db" />
            <Text style={styles.emptyText}>Tidak ada jadwal di tanggal ini</Text>
          </View>
        ) : (
          schedulesForSelected.map(s => (
            <View key={s.id} style={styles.scheduleRow}>
              <View style={styles.scheduleIcon}>
                <Icon name="truck" size={20} color="#059669" />
              </View>
              <View style={styles.scheduleContent}>
                <View style={styles.scheduleTop}>
                  <Text style={styles.scheduleCustomer}>{s.customer}</Text>
                  <View style={[styles.scheduleBadge, {
                    backgroundColor: s.status === 'confirmed' ? '#d1fae5' : '#fef3c7'
                  }]}>
                    <Text style={[styles.scheduleBadgeText, {
                      color: s.status === 'confirmed' ? '#059669' : '#d97706'
                    }]}>
                      {s.status === 'confirmed' ? 'Dikonfirmasi' : 'Menunggu'}
                    </Text>
                  </View>
                </View>
                <View style={styles.scheduleDetail}>
                  <Icon name="map-marker" size={12} color="#9ca3af" />
                  <Text style={styles.scheduleDetailText}>{s.address}</Text>
                </View>
                <View style={styles.scheduleMeta}>
                  <View style={styles.scheduleMetaItem}>
                    <Icon name="clock-outline" size={12} color="#9ca3af" />
                    <Text style={styles.scheduleMetaText}>{s.time}</Text>
                  </View>
                  <Text style={styles.scheduleMetaText}>{s.waste}</Text>
                </View>
              </View>
            </View>
          ))
        )}
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
  calendarCard: {
    backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#a7f3d0',
    padding: 20, marginHorizontal: 20, marginBottom: 16,
  },
  calendarHeader: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20},
  calendarTitle: {fontSize: 16, fontWeight: '600', color: '#111827'},
  dayNamesRow: {flexDirection: 'row', marginBottom: 8},
  dayNameCol: {flex: 1, alignItems: 'center'},
  dayNameText: {fontSize: 11, fontWeight: '500', color: '#9ca3af'},
  daysGrid: {flexDirection: 'row', flexWrap: 'wrap'},
  dayCol: {width: '14.28%', aspectRatio: 1, alignItems: 'center', justifyContent: 'center'},
  daySelected: {backgroundColor: '#059669', borderRadius: 8},
  dayHasSchedule: {backgroundColor: '#f0fdf4', borderRadius: 8},
  dayText: {fontSize: 13, color: '#6b7280'},
  dayTextSelected: {color: '#fff', fontWeight: '600'},
  dayTextHasSchedule: {color: '#059669', fontWeight: '500'},
  dayDot: {width: 4, height: 4, borderRadius: 2, backgroundColor: '#059669', position: 'absolute', bottom: 4},
  scheduleCard: {
    backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#a7f3d0',
    padding: 20, marginHorizontal: 20, marginBottom: 16,
  },
  scheduleHeader: {flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16},
  scheduleTitle: {fontSize: 16, fontWeight: '600', color: '#111827'},
  emptyState: {alignItems: 'center', paddingVertical: 32},
  emptyText: {fontSize: 13, color: '#9ca3af', marginTop: 8},
  scheduleRow: {flexDirection: 'row', gap: 12, padding: 12, backgroundColor: '#f9fafb', borderRadius: 12, marginBottom: 8},
  scheduleIcon: {width: 40, height: 40, backgroundColor: '#d1fae5', borderRadius: 10, alignItems: 'center', justifyContent: 'center'},
  scheduleContent: {flex: 1},
  scheduleTop: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  scheduleCustomer: {fontSize: 13, fontWeight: '600', color: '#111827'},
  scheduleBadge: {paddingHorizontal: 8, paddingVertical: 2, borderRadius: 999},
  scheduleBadgeText: {fontSize: 10, fontWeight: '500'},
  scheduleDetail: {flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4},
  scheduleDetailText: {fontSize: 11, color: '#6b7280'},
  scheduleMeta: {flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 4},
  scheduleMetaItem: {flexDirection: 'row', alignItems: 'center', gap: 4},
  scheduleMetaText: {fontSize: 11, color: '#6b7280'},
});

export default SchedulingScreen;
