// Fungsi untuk mengonversi TXT menjadi VCF
function convertTxtToVcf() {
    const fileInput = document.getElementById('txtFile');
    const vcfOutput = document.getElementById('vcfOutput');

    if (fileInput.files.length === 0) {
        alert('Pilih file TXT terlebih dahulu!');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const text = event.target.result;
        const numbers = text.split(/\r?\n/); // Pisahkan nomor berdasarkan baris
        let vcfContent = '';

        numbers.forEach((number, index) => {
            if (number.trim() !== '') {  // Abaikan baris kosong
                const contactName = `Contact ${index + 1}`;
                vcfContent += `BEGIN:VCARD\nVERSION:3.0\nFN:${contactName}\nTEL:${number.trim()}\nEND:VCARD\n\n`;
            }
        });

        vcfOutput.value = vcfContent; // Tampilkan hasil VCF di textarea
    };

    reader.readAsText(file);
}

// Fungsi untuk mengunduh file VCF hasil konversi
function downloadVCF() {
    const vcfContent = document.getElementById('vcfOutput').value;
    if (vcfContent.trim() === '') {
        alert('Tidak ada konten VCF untuk diunduh!');
        return;
    }

    const blob = new Blob([vcfContent], { type: 'text/vcard' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'contacts.vcf';
    link.click();
}