
  // Active link highlight on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  function changeActive() {
    let index = sections.length;
    while(--index && window.scrollY + 65 < sections[index].offsetTop) {}
    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
  }
  changeActive();
  window.addEventListener('scroll', changeActive);

  // FAQ toggling
  const faqItems = document.querySelectorAll('#faq .faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => toggleFaq(item));
    item.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFaq(item);
      }
    });
  });

  function toggleFaq(item) {
    const expanded = item.getAttribute('aria-expanded') === 'true';
    item.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    const p = item.querySelector('p');
    if (expanded) {
      p.setAttribute('hidden', '');
    } else {
      p.removeAttribute('hidden');
    }
  }

  // Contact form submission (mock)
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.');
    contactForm.reset();
  });

  function filterProduk(kategori) {
    const semuaProduk = document.querySelectorAll('.product-card');
    semuaProduk.forEach(produk => {
      const kategoriProduk = produk.getAttribute('data-kategori');
      if (kategori === 'semua' || kategoriProduk === kategori) {
        produk.style.display = 'flex';
      } else {
        produk.style.display = 'none';
      }
    });

    // Atur kelas 'active' di kategori
    const semuaKategori = document.querySelectorAll('#category-list li');
    semuaKategori.forEach(k => k.classList.remove('active'));
    const kategoriAktif = Array.from(semuaKategori).find(el => el.textContent.toLowerCase().replace(/\s/g, '-') === kategori);
    if (kategoriAktif) kategoriAktif.classList.add('active');
  }
