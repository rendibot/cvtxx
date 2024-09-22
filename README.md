# TXT to VCF Converter

**TXT to VCF Converter** adalah aplikasi web sederhana yang memungkinkan Anda mengonversi file teks (.txt) berisi daftar nomor telepon menjadi format kontak vCard (.vcf). Setiap nomor telepon akan diberikan nama kontak secara berurutan seperti Contact 1, Contact 2, dan seterusnya.

## Fitur
- Mengonversi file TXT yang berisi nomor telepon ke format VCF.
- Memberi nama otomatis pada setiap kontak yang dihasilkan dalam file VCF.
- Mengunduh file VCF hasil konversi.

## Cara Menggunakan
1. Unggah file **TXT** yang berisi daftar nomor telepon (satu nomor per baris).
2. Klik tombol **Convert to VCF** untuk mengonversi daftar nomor menjadi format **VCF**.
3. Hasil konversi akan ditampilkan di area teks.
4. Klik tombol **Download VCF** untuk mengunduh file **VCF**.

## Cara Kerja
- File **TXT** dibaca dan dipisahkan per baris.
- Setiap nomor telepon akan diberikan nama kontak secara otomatis dalam format: **Contact 1**, **Contact 2**, dst.
- File **VCF** akan dihasilkan dan dapat diunduh.

## Persyaratan
- Browser modern (Chrome, Firefox, Edge) dengan dukungan JavaScript.

## Instalasi
1. Clone repository ini ke komputer Anda.
   ```bash
   git clone https://github.com/username/repository-name.git