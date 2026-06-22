# Wastify iOS

Aplikasi waste monitoring B2B berbasis IoT & AI analytics untuk membantu UMKM dan industri mengelola limbah B3 secara legal, transparan, dan efisien.

## Prasyarat

- macOS dengan Xcode 15+
- Node.js >= 18
- CocoaPods (`sudo gem install cocoapods`)
- Apple ID (untuk signing di iPhone fisik)

## Instalasi

```bash
# 1. Install dependencies
npm install

# 2. Install CocoaPods
cd ios && pod install && cd ..
```

## Menjalankan Aplikasi

### Di Simulator

```bash
npx react-native run-ios
```

### Di iPhone Fisik

1. Buka Xcode:
   ```bash
   open ios/WastifyIOS.xcworkspace
   ```

2. Di Xcode:
   - Pilih iPhone kamu sebagai target device
   - Buka **Signing & Capabilities** → pilih Apple ID sebagai team
   - Ubah **Bundle Identifier** jika perlu (misal `com.namamu.WastifyIOS`)

3. Klik **Play (▶)** atau `Cmd+R`

> **Catatan:** Setiap developer harus melakukan signing sendiri. Jika menerima project via zip, buka Xcode dan atur signing dengan Apple ID masing-masing.

## Struktur Aplikasi

### Tab Navigasi (Bawah)
| Tab | Fungsi |
|---|---|
| **Home** | Beranda & daftar fitur |
| **Scan** | Kamera scan limbah |
| **History** | Riwayat scan |
| **Profile** | Profil pengguna |

### Fitur (Stack Screen)
| Screen | Fitur |
|---|---|
| **Monitoring** | Dashboard monitoring limbah real-time |
| **Legal** | Manifes digital & kepatuhan regulasi |
| **Analytical** | Prediksi volume & rekomendasi AI |
| **Historical** | Riwayat transaksi pembuangan |
| **Tracking** | Tracking status pesanan |
| **Scheduling** | Kalender jadwal penjemputan |
| **Invoicing** | Faktur & tagihan digital |
| **Analytics** | Laporan & analitik |
| **Helpdesk** | Tiket support & FAQ |
| **Fitur** | Daftar semua fitur |
| **Tentang** | Info perusahaan |
| **Pasar** | Analisis pasar |
| **Keuangan** | Proyeksi keuangan |
| **BMC** | Business Model Canvas |
| **Kontak** | Form kontak |

## Tech Stack

- React Native 0.76
- TypeScript
- React Navigation (native-stack + bottom-tabs)
- react-native-vector-icons (MaterialCommunityIcons)
- react-native-vision-camera

## Catatan

- Semua data masih menggunakan **dummy data** (belum terhubung ke backend)
- Fitur scan kamera sudah bisa digunakan untuk preview camera (belum ada klasifikasi ML)
- Untuk distribusi ke App Store diperlukan **Apple Developer Program** ($99/tahun)
