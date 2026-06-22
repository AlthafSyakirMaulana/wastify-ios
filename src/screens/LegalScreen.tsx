import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const summaryCards = [
  {label: 'Dokumen Terbit', value: '47', icon: 'file-check', color: '#059669', bg: '#d1fae5'},
  {label: 'Tingkat Kepatuhan', value: '94%', icon: 'shield-check', color: '#2563eb', bg: '#dbeafe'},
  {label: 'Perlu Tindakan', value: '3', icon: 'alert-circle', color: '#d97706', bg: '#fef3c7'},
];

const dummyDocuments = [
  {id: 'MAN-001', customer: 'PT. Maju Jaya', type: 'Manifes Limbah B3', date: '20 Jun 2026', status: 'completed', waste: 'Limbah B3 - 2.5 ton'},
  {id: 'MAN-002', customer: 'CV. Sejahtera Abadi', type: 'Manifes Limbah Organik', date: '18 Jun 2026', status: 'completed', waste: 'Limbah Organik - 1.2 ton'},
  {id: 'MAN-003', customer: 'UD. Berkah Terus', type: 'Manifes Limbah Plastik', date: '15 Jun 2026', status: 'pending', waste: 'Limbah Plastik - 800 kg'},
  {id: 'MAN-004', customer: 'PT. Hijau Lestari', type: 'Manifes Limbah B3', date: '12 Jun 2026', status: 'completed', waste: 'Limbah B3 - 3 ton'},
  {id: 'MAN-005', customer: 'CV. Karya Mandiri', type: 'Manifes Limbah Kertas', date: '10 Jun 2026', status: 'completed', waste: 'Limbah Kertas - 500 kg'},
];

const regulations = [
  {title: 'PP No. 22 Tahun 2021', desc: 'Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup', status: 'terpenuhi'},
  {title: 'UU No. 32 Tahun 2009', desc: 'Perlindungan dan Pengelolaan Lingkungan Hidup', status: 'terpenuhi'},
  {title: 'Permen LHK No. 6 Tahun 2021', desc: 'Tata Cara Pengelolaan Limbah B3', status: 'terpenuhi'},
];

const LegalScreen: React.FC = () => {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Legal Assistant</Text>
        <Text style={styles.headerDesc}>Otomatisasi dokumen kepatuhan hukum sesuai regulasi KLHK.</Text>
      </View>

      <View style={styles.summaryRow}>
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

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Dokumen Manifes Digital</Text>
        {dummyDocuments.map(doc => (
          <View key={doc.id} style={styles.docRow}>
            <View style={styles.docIcon}>
              <Icon name="file-document-outline" size={18} color="#059669" />
            </View>
            <View style={styles.docContent}>
              <View style={styles.docHeader}>
                <Text style={styles.docId}>{doc.id}</Text>
                <View style={[styles.statusBadge, {
                  backgroundColor: doc.status === 'completed' ? '#d1fae5' : '#fef3c7'
                }]}>
                  <Text style={[styles.statusText, {
                    color: doc.status === 'completed' ? '#059669' : '#d97706'
                  }]}>{doc.status === 'completed' ? 'Terbit' : 'Menunggu'}</Text>
                </View>
              </View>
              <Text style={styles.docMeta}>{doc.customer} · {doc.type}</Text>
              <Text style={styles.docSubMeta}>{doc.waste} · {doc.date}</Text>
            </View>
            <TouchableOpacity style={styles.downloadBtn}>
              <Icon name="download" size={18} color="#9ca3af" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Status Kepatuhan Regulasi</Text>
        {regulations.map(reg => (
          <View key={reg.title} style={styles.regRow}>
            <View style={styles.regContent}>
              <Text style={styles.regTitle}>{reg.title}</Text>
              <Text style={styles.regDesc}>{reg.desc}</Text>
            </View>
            <View style={styles.regBadge}>
              <Icon name="check-circle" size={12} color="#059669" />
              <Text style={styles.regBadgeText}>{reg.status}</Text>
            </View>
          </View>
        ))}
        <View style={styles.complianceBox}>
          <Text style={styles.complianceTitle}>Semua regulasi terpenuhi</Text>
          <Text style={styles.complianceDesc}>Dokumen kepatuhan selalu diperbarui sesuai regulasi KLHK terbaru.</Text>
        </View>
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
  summaryValue: {fontSize: 22, fontWeight: '700', color: '#111827'},
  summaryLabel: {fontSize: 11, color: '#6b7280', marginTop: 4},
  card: {
    backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#a7f3d0',
    padding: 20, marginHorizontal: 20, marginBottom: 16,
  },
  cardTitle: {fontSize: 16, fontWeight: '600', color: '#111827', marginBottom: 16},
  docRow: {flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#f9fafb'},
  docIcon: {width: 32, height: 32, backgroundColor: '#d1fae5', borderRadius: 8, alignItems: 'center', justifyContent: 'center'},
  docContent: {flex: 1},
  docHeader: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'},
  docId: {fontSize: 13, fontWeight: '500', color: '#111827'},
  docMeta: {fontSize: 11, color: '#6b7280', marginTop: 2},
  docSubMeta: {fontSize: 11, color: '#9ca3af', marginTop: 1},
  downloadBtn: {padding: 6},
  statusBadge: {paddingHorizontal: 8, paddingVertical: 2, borderRadius: 999},
  statusText: {fontSize: 11, fontWeight: '500'},
  regRow: {flexDirection: 'row', alignItems: 'flex-start', gap: 8, padding: 12, backgroundColor: '#f9fafb', borderRadius: 12, marginBottom: 8},
  regContent: {flex: 1},
  regTitle: {fontSize: 13, fontWeight: '500', color: '#111827'},
  regDesc: {fontSize: 11, color: '#6b7280', marginTop: 2},
  regBadge: {flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: '#d1fae5', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 999},
  regBadgeText: {fontSize: 11, fontWeight: '500', color: '#059669'},
  complianceBox: {padding: 16, backgroundColor: '#f0fdf4', borderRadius: 12, borderWidth: 1, borderColor: '#a7f3d0', marginTop: 8},
  complianceTitle: {fontSize: 13, fontWeight: '600', color: '#065f46'},
  complianceDesc: {fontSize: 12, color: '#059669', marginTop: 4},
});

export default LegalScreen;
