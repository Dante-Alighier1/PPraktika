const swiper = new Swiper('.reviews-slider', {
  loop: true, 
  slidesPerView: 1, 
  spaceBetween: 20, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});

function playVideo() {
  document.querySelector('.video-preview').style.display = 'none';
  const video = document.getElementById('myVideo');
  video.style.display = 'block';
  video.play();
}
