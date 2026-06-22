import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const dummyOrders = [
  {
    id: 'WST-001', customer: 'PT. Maju Jaya', wasteType: 'Limbah B3', volume: '2.5 ton',
    status: 'completed', date: '20 Jun 2026',
    steps: [
      {label: 'Pesanan Dibuat', done: true, time: '20 Jun 08:00'},
      {label: 'Penjemputan', done: true, time: '20 Jun 10:30'},
      {label: 'Dalam Perjalanan', done: true, time: '20 Jun 11:15'},
      {label: 'Selesai Diproses', done: true, time: '20 Jun 14:00'},
    ],
  },
  {
    id: 'WST-002', customer: 'CV. Sejahtera Abadi', wasteType: 'Limbah Organik', volume: '1.2 ton',
    status: 'in_transit', date: '21 Jun 2026',
    steps: [
      {label: 'Pesanan Dibuat', done: true, time: '21 Jun 07:30'},
      {label: 'Penjemputan', done: true, time: '21 Jun 09:00'},
      {label: 'Dalam Perjalanan', done: true, time: '21 Jun 09:45'},
      {label: 'Selesai Diproses', done: false, time: '-'},
    ],
  },
  {
    id: 'WST-003', customer: 'UD. Berkah Terus', wasteType: 'Limbah Plastik', volume: '800 kg',
    status: 'scheduled', date: '22 Jun 2026',
    steps: [
      {label: 'Pesanan Dibuat', done: true, time: '21 Jun 14:00'},
      {label: 'Penjemputan', done: false, time: '22 Jun 09:00'},
      {label: 'Dalam Perjalanan', done: false, time: '-'},
      {label: 'Selesai Diproses', done: false, time: '-'},
    ],
  },
  {
    id: 'WST-004', customer: 'PT. Hijau Lestari', wasteType: 'Limbah B3', volume: '3 ton',
    status: 'pending', date: '23 Jun 2026',
    steps: [
      {label: 'Pesanan Dibuat', done: true, time: '21 Jun 10:00'},
      {label: 'Penjemputan', done: false, time: '-'},
      {label: 'Dalam Perjalanan', done: false, time: '-'},
      {label: 'Selesai Diproses', done: false, time: '-'},
    ],
  },
];

const statusConfig: Record<string, {label: string; color: string; bg: string; icon: string}> = {
  completed: {label: 'Selesai', color: '#059669', bg: '#d1fae5', icon: 'check-circle'},
  in_transit: {label: 'Dalam Perjalanan', color: '#2563eb', bg: '#dbeafe', icon: 'truck'},
  scheduled: {label: 'Terjadwal', color: '#d97706', bg: '#fef3c7', icon: 'clock-outline'},
  pending: {label: 'Menunggu', color: '#6b7280', bg: '#f3f4f6', icon: 'alert-circle'},
};

const filters = [
  {key: 'all', label: 'Semua'},
  {key: 'completed', label: 'Selesai'},
  {key: 'in_transit', label: 'Dalam Perjalanan'},
  {key: 'scheduled', label: 'Terjadwal'},
  {key: 'pending', label: 'Menunggu'},
];

const TrackingScreen: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? dummyOrders : dummyOrders.filter(o => o.status === filter);

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Status Tracking</Text>
        <Text style={styles.headerDesc}>Pantau status pengelolaan limbah Anda secara real-time.</Text>
      </View>

      <View style={styles.filterRow}>
        {filters.map(f => (
          <TouchableOpacity
            key={f.key}
            style={[styles.filterBtn, filter === f.key && styles.filterBtnActive]}
            onPress={() => setFilter(f.key)}>
            <Text style={[styles.filterBtnText, filter === f.key && styles.filterBtnTextActive]}>{f.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {filtered.map(order => {
        const cfg = statusConfig[order.status];
        return (
          <View key={order.id} style={styles.card}>
            <View style={styles.orderHeader}>
              <View style={styles.orderInfo}>
                <View style={styles.orderIcon}>
                  <Icon name="package-variant" size={24} color="#059669" />
                </View>
                <View>
                  <Text style={styles.orderId}>{order.id}</Text>
                  <Text style={styles.orderCustomer}>{order.customer}</Text>
                  <Text style={styles.orderMeta}>{order.wasteType} · {order.volume} · {order.date}</Text>
                </View>
              </View>
              <View style={[styles.statusBadge, {backgroundColor: cfg.bg}]}>
                <Icon name={cfg.icon as any} size={14} color={cfg.color} />
                <Text style={[styles.statusText, {color: cfg.color}]}>{cfg.label}</Text>
              </View>
            </View>

            <View style={styles.stepsRow}>
              {order.steps.map((step, si) => (
                <View key={step.label} style={styles.stepCol}>
                  <View style={[styles.stepCircle, step.done ? styles.stepDone : styles.stepPending]}>
                    <Text style={[styles.stepNumber, step.done ? styles.stepNumberDone : styles.stepNumberPending]}>{si + 1}</Text>
                  </View>
                  <Text style={[styles.stepLabel, step.done ? styles.stepLabelDone : styles.stepLabelPending]}>{step.label}</Text>
                  <Text style={styles.stepTime}>{step.time}</Text>
                </View>
              ))}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {flex: 1, backgroundColor: '#f0fdf4'},
  scrollContent: {paddingBottom: 32},
  header: {padding: 20, paddingTop: 60, paddingBottom: 24},
  headerTitle: {fontSize: 28, fontWeight: '700', color: '#111827', marginBottom: 8},
  headerDesc: {fontSize: 15, color: '#4b5563', lineHeight: 22},
  filterRow: {flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, gap: 8, marginBottom: 20},
  filterBtn: {paddingHorizontal: 14, paddingVertical: 8, borderRadius: 12, borderWidth: 1, borderColor: '#e5e7eb', backgroundColor: '#fff'},
  filterBtnActive: {backgroundColor: '#059669', borderColor: '#059669'},
  filterBtnText: {fontSize: 12, fontWeight: '500', color: '#6b7280'},
  filterBtnTextActive: {color: '#fff'},
  card: {
    backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#a7f3d0',
    padding: 20, marginHorizontal: 20, marginBottom: 16,
  },
  orderHeader: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20},
  orderInfo: {flexDirection: 'row', gap: 12, flex: 1},
  orderIcon: {width: 48, height: 48, backgroundColor: '#d1fae5', borderRadius: 12, alignItems: 'center', justifyContent: 'center'},
  orderId: {fontSize: 16, fontWeight: '600', color: '#111827'},
  orderCustomer: {fontSize: 13, color: '#6b7280', marginTop: 2},
  orderMeta: {fontSize: 11, color: '#9ca3af', marginTop: 2},
  statusBadge: {flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 999},
  statusText: {fontSize: 11, fontWeight: '500'},
  stepsRow: {flexDirection: 'row', gap: 4},
  stepCol: {flex: 1, alignItems: 'center'},
  stepCircle: {width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginBottom: 4},
  stepDone: {backgroundColor: '#d1fae5'},
  stepPending: {backgroundColor: '#f3f4f6'},
  stepNumber: {fontSize: 12, fontWeight: '700'},
  stepNumberDone: {color: '#059669'},
  stepNumberPending: {color: '#9ca3af'},
  stepLabel: {fontSize: 10, fontWeight: '500', textAlign: 'center'},
  stepLabelDone: {color: '#111827'},
  stepLabelPending: {color: '#9ca3af'},
  stepTime: {fontSize: 9, color: '#9ca3af', marginTop: 2},
});

export default TrackingScreen;
