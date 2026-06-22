import React, {useState, useMemo} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const dummyInvoices = [
  {id: 'INV-001', customer: 'PT. Maju Jaya', amount: 'Rp 2.500.000', date: '20 Jun 2026', dueDate: '5 Jul 2026', status: 'paid', waste: 'Limbah B3 - 2.5 ton'},
  {id: 'INV-002', customer: 'CV. Sejahtera Abadi', amount: 'Rp 1.200.000', date: '18 Jun 2026', dueDate: '3 Jul 2026', status: 'paid', waste: 'Limbah Organik - 1.2 ton'},
  {id: 'INV-003', customer: 'UD. Berkah Terus', amount: 'Rp 800.000', date: '15 Jun 2026', dueDate: '30 Jun 2026', status: 'pending', waste: 'Limbah Plastik - 800 kg'},
  {id: 'INV-004', customer: 'PT. Hijau Lestari', amount: 'Rp 3.000.000', date: '12 Jun 2026', dueDate: '27 Jun 2026', status: 'overdue', waste: 'Limbah B3 - 3 ton'},
  {id: 'INV-005', customer: 'CV. Karya Mandiri', amount: 'Rp 650.000', date: '10 Jun 2026', dueDate: '25 Jun 2026', status: 'paid', waste: 'Limbah Kertas - 500 kg'},
  {id: 'INV-006', customer: 'PT. Maju Jaya', amount: 'Rp 2.200.000', date: '5 Jun 2026', dueDate: '20 Jun 2026', status: 'pending', waste: 'Limbah B3 - 2 ton'},
];

const statusConfig: Record<string, {label: string; color: string; bg: string; icon: string}> = {
  paid: {label: 'Lunas', color: '#059669', bg: '#d1fae5', icon: 'check-circle'},
  pending: {label: 'Menunggu', color: '#d97706', bg: '#fef3c7', icon: 'clock-outline'},
  overdue: {label: 'Jatuh Tempo', color: '#dc2626', bg: '#fee2e2', icon: 'alert-circle'},
};

const filters = [
  {key: 'all', label: 'Semua'},
  {key: 'paid', label: 'Lunas'},
  {key: 'pending', label: 'Menunggu'},
  {key: 'overdue', label: 'Jatuh Tempo'},
];

const InvoicingScreen: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    return filter === 'all' ? dummyInvoices : dummyInvoices.filter(inv => inv.status === filter);
  }, [filter]);

  const totalAmount = useMemo(() => {
    return filtered.reduce((sum, inv) => {
      const num = parseInt(inv.amount.replace(/[^0-9]/g, ''));
      return sum + num;
    }, 0);
  }, [filtered]);

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Digital Invoicing</Text>
        <Text style={styles.headerDesc}>Kelola dan unduh faktur layanan pengelolaan limbah Anda.</Text>
      </View>

      <View style={styles.totalBanner}>
        <Text style={styles.totalLabel}>Total Tagihan ({filter === 'all' ? 'Semua' : statusConfig[filter]?.label || filter})</Text>
        <Text style={styles.totalValue}>Rp {totalAmount.toLocaleString('id-ID')}</Text>
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

      {filtered.map(inv => {
        const cfg = statusConfig[inv.status];
        return (
          <View key={inv.id} style={styles.card}>
            <View style={styles.invRow}>
              <View style={styles.invIcon}>
                <Icon name="file-document-outline" size={20} color="#059669" />
              </View>
              <View style={styles.invContent}>
                <View style={styles.invTop}>
                  <Text style={styles.invId}>{inv.id}</Text>
                  <View style={[styles.statusBadge, {backgroundColor: cfg.bg}]}>
                    <Icon name={cfg.icon as any} size={12} color={cfg.color} />
                    <Text style={[styles.statusText, {color: cfg.color}]}>{cfg.label}</Text>
                  </View>
                </View>
                <Text style={styles.invCustomer}>{inv.customer}</Text>
                <Text style={styles.invWaste}>{inv.waste}</Text>
                <View style={styles.invDates}>
                  <Text style={styles.invDate}>Dibuat: {inv.date}</Text>
                  <Text style={styles.invDate}>Jatuh Tempo: {inv.dueDate}</Text>
                </View>
              </View>
              <View style={styles.invActions}>
                <Text style={styles.invAmount}>{inv.amount}</Text>
                <View style={styles.actionBtns}>
                  <TouchableOpacity style={styles.actionBtn}>
                    <Icon name="eye-outline" size={16} color="#9ca3af" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionBtn}>
                    <Icon name="download" size={16} color="#9ca3af" />
                  </TouchableOpacity>
                </View>
              </View>
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
  totalBanner: {backgroundColor: '#059669', borderRadius: 16, padding: 20, marginHorizontal: 20, marginBottom: 16},
  totalLabel: {fontSize: 13, color: '#a7f3d0', marginBottom: 4},
  totalValue: {fontSize: 28, fontWeight: '700', color: '#fff'},
  filterRow: {flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, gap: 8, marginBottom: 16},
  filterBtn: {paddingHorizontal: 14, paddingVertical: 8, borderRadius: 12, borderWidth: 1, borderColor: '#e5e7eb', backgroundColor: '#fff'},
  filterBtnActive: {backgroundColor: '#059669', borderColor: '#059669'},
  filterBtnText: {fontSize: 12, fontWeight: '500', color: '#6b7280'},
  filterBtnTextActive: {color: '#fff'},
  card: {
    backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#a7f3d0',
    padding: 16, marginHorizontal: 20, marginBottom: 12,
  },
  invRow: {flexDirection: 'row', gap: 12},
  invIcon: {width: 40, height: 40, backgroundColor: '#d1fae5', borderRadius: 10, alignItems: 'center', justifyContent: 'center'},
  invContent: {flex: 1},
  invTop: {flexDirection: 'row', alignItems: 'center', gap: 8},
  invId: {fontSize: 14, fontWeight: '600', color: '#111827'},
  invCustomer: {fontSize: 12, color: '#6b7280', marginTop: 2},
  invWaste: {fontSize: 11, color: '#9ca3af', marginTop: 1},
  invDates: {flexDirection: 'row', gap: 12, marginTop: 4},
  invDate: {fontSize: 10, color: '#9ca3af'},
  invActions: {alignItems: 'flex-end', justifyContent: 'space-between'},
  invAmount: {fontSize: 15, fontWeight: '700', color: '#111827'},
  actionBtns: {flexDirection: 'row', gap: 4, marginTop: 8},
  actionBtn: {padding: 6},
  statusBadge: {flexDirection: 'row', alignItems: 'center', gap: 3, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 999},
  statusText: {fontSize: 10, fontWeight: '500'},
});

export default InvoicingScreen;
