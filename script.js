const filterButtons = document.querySelectorAll('.filter-buttons button');
const items = document.querySelectorAll('.gallery-grid .item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Atur tombol aktif
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    items.forEach(item => {
      const detail = item.querySelector('.project-detail');

      // Selalu sembunyikan detail dulu
      if (detail) detail.style.display = 'none';

      if (filter === 'all') {
        item.style.display = 'block';
        // Saat 'all', biarkan detail tetap tersembunyi
      } else if (item.classList.contains(filter)) {
        item.style.display = 'block';
        // Hanya tampilkan detail jika tombol bukan 'all'
        if (detail) detail.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
const emoji = document.getElementById('emoji');

emoji.addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});

