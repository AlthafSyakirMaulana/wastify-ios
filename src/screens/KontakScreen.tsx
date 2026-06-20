import React from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const KontakScreen: React.FC = () => {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hubungi Kami</Text>
        <Text style={styles.headerDesc}>
          Tertarik untuk bergabung atau ingin tahu lebih lanjut tentang Wastify?
          Hubungi tim kami.
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Informasi Kontak</Text>
          {[
            {icon: 'map-marker', label: 'Alamat', value: 'Jawa Timur, Indonesia'},
            {icon: 'email-outline', label: 'Email', value: 'wastify@olahdunia.com'},
            {icon: 'phone-outline', label: 'Telepon', value: '(akan diinformasikan)'},
          ].map((item) => (
            <View key={item.label} style={styles.contactRow}>
              <View style={styles.contactIcon}>
                <Icon name={item.icon} size={20} color="#059669" />
              </View>
              <View>
                <Text style={styles.contactLabel}>{item.label}</Text>
                <Text style={styles.contactValue}>{item.value}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.ctaCard}>
          <Text style={styles.ctaTitle}>Siap Mengelola Limbah Secara Legal?</Text>
          <Text style={styles.ctaDesc}>
            Wastify berkomitmen menjadi solusi digital untuk membantu bisnis
            mengelola limbah secara legal, transparan, dan berkelanjutan.
            Hubungi kami untuk konsultasi gratis.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Kirim Pesan</Text>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Nama Lengkap</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan nama Anda"
              placeholderTextColor="#9ca3af"
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan email Anda"
              placeholderTextColor="#9ca3af"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Perusahaan</Text>
            <TextInput
              style={styles.input}
              placeholder="Nama perusahaan"
              placeholderTextColor="#9ca3af"
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Pesan</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Tulis pesan Anda"
              placeholderTextColor="#9ca3af"
              multiline
              numberOfLines={4}
            />
          </View>
          <TouchableOpacity style={styles.submitBtn}>
            <Icon name="send" size={16} color="#fff" />
            <Text style={styles.submitText}>Kirim Pesan</Text>
          </TouchableOpacity>
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
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    padding: 20,
  },
  infoTitle: {fontSize: 18, fontWeight: '700', color: '#111827', marginBottom: 16},
  contactRow: {flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 16},
  contactIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#f0fdf4',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactLabel: {fontSize: 12, fontWeight: '500', color: '#6b7280'},
  contactValue: {fontSize: 14, color: '#111827'},
  ctaCard: {
    backgroundColor: '#059669',
    borderRadius: 16,
    padding: 24,
  },
  ctaTitle: {fontSize: 18, fontWeight: '600', color: '#fff', marginBottom: 8},
  ctaDesc: {fontSize: 13, color: '#a7f3d0', lineHeight: 20},
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    padding: 20,
  },
  formTitle: {fontSize: 18, fontWeight: '700', color: '#111827', marginBottom: 20},
  formGroup: {marginBottom: 16},
  formLabel: {fontSize: 13, fontWeight: '500', color: '#374151', marginBottom: 6},
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#111827',
  },
  textArea: {height: 100, textAlignVertical: 'top'},
  submitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#059669',
    borderRadius: 12,
    paddingVertical: 14,
  },
  submitText: {color: '#fff', fontSize: 15, fontWeight: '600'},
});

export default KontakScreen;
