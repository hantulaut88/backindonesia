// Targetkan waktu mundur (misalnya  Januari 2025, 00:00:00)
const targetDate = new Date('2025-02-01T08:58:00').getTime();

// Fungsi untuk memperbarui timer setiap detik
const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Hitung hari, jam, menit, dan detik
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Tampilkan hasil hitung mundur di elemen dengan id "timer"
    document.getElementById("timer").innerHTML = days + " Hari " + hours + " Jam " + minutes + " Menit " + seconds + " Detik";

    // Jika hitung mundur selesai
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("timer").innerHTML = "Waktu Habis!";
    }
}, 1000);
