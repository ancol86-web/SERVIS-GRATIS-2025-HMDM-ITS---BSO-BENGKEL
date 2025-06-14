function showMoreInfo() {
  alert("Untuk informasi lebih lanjut, silakan hubungi kontak yang tersedia atau kunjungi media sosial kami.");
}

function validateForm() {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (name === '' || phone === '') {
    alert('Mohon isi semua kolom sebelum mendaftar.');
    return false;
  }

  if (!/^[0-9]{10,15}$/.test(phone)) {
    alert('Nomor HP tidak valid. Masukkan 10–15 digit angka.');
    return false;
  }

  alert(`Terima kasih ${name}, pendaftaran Anda telah diterima!`);
  return false; // gunakan true jika form dikirim ke backend
}
