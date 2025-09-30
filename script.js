// Fade-in animasyonu scroll ile

const photos = document.querySelectorAll('.photo');

function checkPosition() {
  const triggerBottom = window.innerHeight * 0.85;
  photos.forEach(photo => {
    const photoTop = photo.getBoundingClientRect().top;
    if(photoTop < triggerBottom) {
      photo.style.opacity = '1';
      photo.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', checkPosition);
checkPosition();

// Popup açma
const popup = document.getElementById('popup');
const popupMsg = document.getElementById('popupMsg');
const close = document.getElementById('close');

photos.forEach(photo => {
  photo.addEventListener('click', () => {
    popupMsg.textContent = photo.getAttribute('data-msg');
    popup.style.display = 'flex';
  });
});

close.addEventListener('click', () => {
  popup.style.display = 'none';
});


// Basit client-side parola (güvenli değildir!)
document.addEventListener('DOMContentLoaded', () => {
  const correct = 'Love You'; // = DİKKAT: burada parola düz metin gözükür
  const saved = sessionStorage.getItem('site_auth');

  function ask() {
    const p = prompt('Siteye giriş için parola:');
    if (p === null) return; // iptal
    if (p === correct) {
      sessionStorage.setItem('site_auth','ok');
      showContent();
    } else {
      alert('Yanlış parola');
      ask();
    }
  }

  function showContent() {
    // Örneğin body içeriğini göster (CSS ile başlangıçta gizlemiş ol)
    document.body.style.visibility = 'visible';
  }

  // Başlangıçta içeriği gizle (CSS ile aynı şeyi yap)
  document.body.style.visibility = 'hidden';

  if (saved === 'ok') showContent();
  else ask();
});

