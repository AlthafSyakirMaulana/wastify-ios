import React, {useState, useMemo} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const dummyTickets = [
  {id: 'TKT-001', subject: 'Jadwal penjemputan tidak sesuai', customer: 'PT. Maju Jaya', date: '21 Jun 2026', status: 'open', priority: 'high', messages: 4},
  {id: 'TKT-002', subject: 'Tagihan tidak sesuai volume limbah', customer: 'CV. Sejahtera Abadi', date: '20 Jun 2026', status: 'in_progress', priority: 'medium', messages: 6},
  {id: 'TKT-003', subject: 'Dokumen manifes tidak muncul', customer: 'UD. Berkah Terus', date: '19 Jun 2026', status: 'resolved', priority: 'low', messages: 3},
  {id: 'TKT-004', subject: 'Permintaan penambahan jadwal', customer: 'PT. Hijau Lestari', date: '18 Jun 2026', status: 'open', priority: 'low', messages: 2},
  {id: 'TKT-005', subject: 'Kendala akses aplikasi', customer: 'CV. Karya Mandiri', date: '17 Jun 2026', status: 'resolved', priority: 'high', messages: 8},
  {id: 'TKT-006', subject: 'Revisi data perusahaan', customer: 'PT. Maju Jaya', date: '16 Jun 2026', status: 'closed', priority: 'medium', messages: 5},
];

const statusConfig: Record<string, {label: string; color: string; bg: string; icon: string}> = {
  open: {label: 'Terbuka', color: '#2563eb', bg: '#dbeafe', icon: 'alert-circle'},
  in_progress: {label: 'Diproses', color: '#d97706', bg: '#fef3c7', icon: 'clock-outline'},
  resolved: {label: 'Terselesaikan', color: '#059669', bg: '#d1fae5', icon: 'check-circle'},
  closed: {label: 'Ditutup', color: '#6b7280', bg: '#f3f4f6', icon: 'check-circle'},
};

const priorityConfig: Record<string, {label: string; color: string; bg: string}> = {
  high: {label: 'Tinggi', color: '#dc2626', bg: '#fee2e2'},
  medium: {label: 'Sedang', color: '#d97706', bg: '#fef3c7'},
  low: {label: 'Rendah', color: '#6b7280', bg: '#f3f4f6'},
};

const faqData = [
  {q: 'Bagaimana cara menjadwalkan penjemputan limbah?', a: 'Anda dapat menjadwalkan penjemputan melalui halaman Scheduling. Pilih tanggal yang tersedia dan konfirmasi jadwal Anda.'},
  {q: 'Berapa lama proses penjemputan limbah?', a: 'Proses penjemputan biasanya memakan waktu 1-2 jam setelah petugas tiba di lokasi.'},
  {q: 'Bagaimana jika ada ketidaksesuaian tagihan?', a: 'Silakan buat tiket help desk dengan melampirkan bukti tagihan, tim kami akan memproses dalam 1x24 jam.'},
  {q: 'Apakah saya bisa membatalkan jadwal?', a: 'Ya, pembatalan dapat dilakukan maksimal 2 jam sebelum jadwal penjemputan.'},
];

const sampleChat = [
  {role: 'Anda', message: 'Halo, saya ingin menanyakan status tiket saya. Terima kasih.', time: '2 jam lalu'},
  {role: 'Support', message: 'Halo, terima kasih telah menghubungi Wastify. Tiket Anda sedang kami proses dan akan segera kami update.', time: '1 jam lalu'},
  {role: 'Anda', message: 'Baik, terima kasih infonya.', time: '30 menit lalu'},
];

const HelpdeskScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tickets' | 'new' | 'faq'>('tickets');
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredTickets = useMemo(() => {
    return dummyTickets
      .filter(t => filterStatus === 'all' || t.status === filterStatus)
      .filter(t => t.subject.toLowerCase().includes(search.toLowerCase()) || t.customer.toLowerCase().includes(search.toLowerCase()));
  }, [search, filterStatus]);

  const ticketDetail = selectedTicket ? dummyTickets.find(t => t.id === selectedTicket) : null;

  const renderTicketsList = () => (
    <View>
      <View style={styles.filterRow}>
        <View style={styles.searchBox}>
          <Icon name="magnify" size={16} color="#9ca3af" />
          <TextInput
            style={styles.searchInput}
            placeholder="Cari tiket..."
            placeholderTextColor="#9ca3af"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>
      <View style={styles.filterRow}>
        {['all', 'open', 'in_progress', 'resolved', 'closed'].map(s => (
          <TouchableOpacity
            key={s}
            style={[styles.filterBtn, filterStatus === s && styles.filterBtnActive]}
            onPress={() => setFilterStatus(s)}>
            <Text style={[styles.filterBtnText, filterStatus === s && styles.filterBtnTextActive]}>
              {s === 'all' ? 'Semua' : statusConfig[s]?.label || s}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {filteredTickets.map(ticket => {
        const scfg = statusConfig[ticket.status];
        const pcfg = priorityConfig[ticket.priority];
        return (
          <TouchableOpacity
            key={ticket.id}
            style={styles.ticketCard}
            onPress={() => setSelectedTicket(ticket.id)}>
            <View style={styles.ticketRow}>
              <View style={styles.ticketIcon}>
                <Icon name="message-text-outline" size={20} color="#059669" />
              </View>
              <View style={styles.ticketContent}>
                <Text style={styles.ticketSubject}>{ticket.subject}</Text>
                <Text style={styles.ticketMeta}>{ticket.customer} · {ticket.date}</Text>
              </View>
              <View style={styles.ticketTags}>
                <View style={[styles.priorityBadge, {backgroundColor: pcfg.bg}]}>
                  <Text style={[styles.priorityText, {color: pcfg.color}]}>{pcfg.label}</Text>
                </View>
                <View style={[styles.statusBadge, {backgroundColor: scfg.bg}]}>
                  <Icon name={scfg.icon as any} size={10} color={scfg.color} />
                  <Text style={[styles.statusText, {color: scfg.color}]}>{scfg.label}</Text>
                </View>
                <View style={styles.messageCount}>
                  <Text style={styles.messageCountText}>{ticket.messages}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  const renderTicketDetail = () => {
    if (!ticketDetail) return null;
    const scfg = statusConfig[ticketDetail.status];
    return (
      <View>
        <TouchableOpacity onPress={() => setSelectedTicket(null)}>
          <Text style={styles.backBtn}>← Kembali ke daftar tiket</Text>
        </TouchableOpacity>
        <View style={styles.detailCard}>
          <View style={styles.detailHeader}>
            <View style={styles.detailInfo}>
              <Text style={styles.detailTitle}>{ticketDetail.subject}</Text>
              <Text style={styles.detailMeta}>{ticketDetail.id} · {ticketDetail.customer} · {ticketDetail.date}</Text>
            </View>
            <View style={[styles.statusBadge, {backgroundColor: scfg.bg}]}>
              <Text style={[styles.statusText, {color: scfg.color}]}>{scfg.label}</Text>
            </View>
          </View>

          <View style={styles.chatArea}>
            {sampleChat.map((msg, i) => (
              <View key={i} style={[styles.chatBubble, msg.role === 'Anda' ? styles.chatMine : styles.chatTheirs]}>
                <Text style={[styles.chatRole, msg.role === 'Anda' ? styles.chatRoleMine : styles.chatRoleTheirs]}>{msg.role}</Text>
                <Text style={[styles.chatMessage, msg.role === 'Anda' ? styles.chatMessageMine : styles.chatMessageTheirs]}>{msg.message}</Text>
                <Text style={[styles.chatTime, msg.role === 'Anda' ? styles.chatTimeMine : styles.chatTimeTheirs]}>{msg.time}</Text>
              </View>
            ))}
          </View>

          <View style={styles.chatInputRow}>
            <TextInput
              style={styles.chatInput}
              placeholder="Ketik pesan..."
              placeholderTextColor="#9ca3af"
              value={newMessage}
              onChangeText={setNewMessage}
            />
            <TouchableOpacity style={styles.sendBtn}>
              <Icon name="send" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderNewTicket = () => (
    <View style={styles.formCard}>
      <Text style={styles.formTitle}>Buat Tiket Baru</Text>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Subjek</Text>
        <TextInput style={styles.formInput} placeholder="Judul permasalahan" placeholderTextColor="#9ca3af" />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Kategori</Text>
        <View style={styles.formSelect}>
          <Text style={styles.formSelectText}>Penjadwalan</Text>
          <Icon name="chevron-down" size={16} color="#9ca3af" />
        </View>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Prioritas</Text>
        <View style={styles.formSelect}>
          <Text style={styles.formSelectText}>Sedang</Text>
          <Icon name="chevron-down" size={16} color="#9ca3af" />
        </View>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Deskripsi</Text>
        <TextInput style={[styles.formInput, styles.formTextarea]} placeholder="Jelaskan permasalahan Anda secara detail" placeholderTextColor="#9ca3af" multiline numberOfLines={5} />
      </View>
      <TouchableOpacity style={styles.submitBtn}>
        <Icon name="plus" size={18} color="#fff" />
        <Text style={styles.submitBtnText}>Buat Tiket</Text>
      </TouchableOpacity>
    </View>
  );

  const renderFaq = () => (
    <View>
      {faqData.map((faq, i) => (
        <TouchableOpacity
          key={i}
          style={styles.faqCard}
          onPress={() => setExpandedFaq(expandedFaq === i ? null : i)}>
          <View style={styles.faqHeader}>
            <Text style={styles.faqQuestion}>{faq.q}</Text>
            <Icon name="chevron-down" size={16} color="#9ca3af" style={expandedFaq === i ? styles.faqIconOpen : undefined} />
          </View>
          {expandedFaq === i && (
            <Text style={styles.faqAnswer}>{faq.a}</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Help Desk</Text>
        <Text style={styles.headerDesc}>Pusat bantuan dan dukungan pelanggan Wastify.</Text>
      </View>

      <View style={styles.tabRow}>
        {[
          {key: 'tickets', label: 'Tiket Saya'},
          {key: 'new', label: 'Buat Tiket'},
          {key: 'faq', label: 'FAQ'},
        ].map(tab => (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tabBtn, activeTab === tab.key && styles.tabBtnActive]}
            onPress={() => { setActiveTab(tab.key as any); setSelectedTicket(null); }}>
            <Text style={[styles.tabBtnText, activeTab === tab.key && styles.tabBtnTextActive]}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.contentArea}>
        {activeTab === 'tickets' && (selectedTicket ? renderTicketDetail() : renderTicketsList())}
        {activeTab === 'new' && renderNewTicket()}
        {activeTab === 'faq' && renderFaq()}
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
  tabRow: {flexDirection: 'row', paddingHorizontal: 20, gap: 8, marginBottom: 20},
  tabBtn: {paddingHorizontal: 16, paddingVertical: 10, borderRadius: 12, borderWidth: 1, borderColor: '#e5e7eb', backgroundColor: '#fff'},
  tabBtnActive: {backgroundColor: '#059669', borderColor: '#059669'},
  tabBtnText: {fontSize: 13, fontWeight: '500', color: '#6b7280'},
  tabBtnTextActive: {color: '#fff'},
  contentArea: {paddingHorizontal: 20},
  filterRow: {flexDirection: 'row', gap: 8, marginBottom: 12, flexWrap: 'wrap'},
  searchBox: {flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, paddingHorizontal: 12, flex: 1},
  searchInput: {flex: 1, paddingVertical: 10, fontSize: 13, color: '#111827', marginLeft: 8},
  filterBtn: {paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8, borderWidth: 1, borderColor: '#e5e7eb', backgroundColor: '#fff'},
  filterBtnActive: {backgroundColor: '#059669', borderColor: '#059669'},
  filterBtnText: {fontSize: 11, color: '#6b7280'},
  filterBtnTextActive: {color: '#fff'},
  ticketCard: {
    backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#a7f3d0',
    padding: 16, marginBottom: 10,
  },
  ticketRow: {flexDirection: 'row', gap: 12, alignItems: 'center'},
  ticketIcon: {width: 40, height: 40, backgroundColor: '#d1fae5', borderRadius: 10, alignItems: 'center', justifyContent: 'center'},
  ticketContent: {flex: 1},
  ticketSubject: {fontSize: 13, fontWeight: '500', color: '#111827'},
  ticketMeta: {fontSize: 11, color: '#6b7280', marginTop: 2},
  ticketTags: {flexDirection: 'row', gap: 4, flexWrap: 'wrap', alignItems: 'center'},
  priorityBadge: {paddingHorizontal: 6, paddingVertical: 2, borderRadius: 999},
  priorityText: {fontSize: 9, fontWeight: '500'},
  statusBadge: {flexDirection: 'row', alignItems: 'center', gap: 2, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 999},
  statusText: {fontSize: 9, fontWeight: '500'},
  messageCount: {backgroundColor: '#f3f4f6', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 999},
  messageCountText: {fontSize: 9, color: '#9ca3af'},
  backBtn: {fontSize: 13, color: '#059669', fontWeight: '500', marginBottom: 12},
  detailCard: {
    backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#a7f3d0',
    padding: 20,
  },
  detailHeader: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20},
  detailInfo: {flex: 1},
  detailTitle: {fontSize: 16, fontWeight: '700', color: '#111827'},
  detailMeta: {fontSize: 12, color: '#6b7280', marginTop: 4},
  chatArea: {gap: 12, marginBottom: 20},
  chatBubble: {maxWidth: '75%', padding: 12, borderRadius: 12},
  chatMine: {alignSelf: 'flex-end', backgroundColor: '#059669'},
  chatTheirs: {alignSelf: 'flex-start', backgroundColor: '#f3f4f6'},
  chatRole: {fontSize: 10, fontWeight: '500', marginBottom: 4},
  chatRoleMine: {color: '#fff', opacity: 0.7},
  chatRoleTheirs: {color: '#6b7280'},
  chatMessage: {fontSize: 13},
  chatMessageMine: {color: '#fff'},
  chatMessageTheirs: {color: '#111827'},
  chatTime: {fontSize: 9, marginTop: 4},
  chatTimeMine: {color: '#fff', opacity: 0.6, textAlign: 'right'},
  chatTimeTheirs: {color: '#9ca3af', textAlign: 'right'},
  chatInputRow: {flexDirection: 'row', gap: 8},
  chatInput: {flex: 1, borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 10, fontSize: 13, color: '#111827'},
  sendBtn: {width: 44, height: 44, backgroundColor: '#059669', borderRadius: 12, alignItems: 'center', justifyContent: 'center'},
  formCard: {
    backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#a7f3d0',
    padding: 24,
  },
  formTitle: {fontSize: 20, fontWeight: '700', color: '#111827', marginBottom: 20},
  formGroup: {marginBottom: 16},
  formLabel: {fontSize: 13, fontWeight: '500', color: '#374151', marginBottom: 6},
  formInput: {borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12, fontSize: 13, color: '#111827'},
  formTextarea: {height: 100, textAlignVertical: 'top'},
  formSelect: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12},
  formSelectText: {fontSize: 13, color: '#6b7280'},
  submitBtn: {flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, backgroundColor: '#059669', paddingVertical: 14, borderRadius: 12, marginTop: 8},
  submitBtnText: {fontSize: 14, fontWeight: '600', color: '#fff'},
  faqCard: {
    backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#a7f3d0',
    padding: 16, marginBottom: 10,
  },
  faqHeader: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  faqQuestion: {fontSize: 13, fontWeight: '500', color: '#111827', flex: 1, marginRight: 8},
  faqIconOpen: {transform: [{rotate: '180deg'}]},
  faqAnswer: {fontSize: 12, color: '#6b7280', lineHeight: 20, marginTop: 12},
});

export default HelpdeskScreen;
