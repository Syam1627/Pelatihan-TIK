// 1. Mengambil elemen tombol dari HTML berdasarkan ID 'SapaButton'
const tombolSapa = document.getElementById('SapaButton');

// 2. Memberikan pendengar acara (event listener) saat tombol diklik
tombolSapa.addEventListener('click', function() {
    // Menampilkan pesan pop-up saat tombol diklik
    alert("Halo!, Terima kasih sudah dipencet");
});
