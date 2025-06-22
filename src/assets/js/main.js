  AOS.init({
    duration: 1000,
    once: true // only run 1 short
  });
const buttons = document.querySelectorAll('.detail__wrap-size button');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active')); 
      btn.classList.add('active');
    });
  });
  const quantityEl = document.getElementById('quantity');
  const decreaseBtn = document.getElementById('decrease');
  const increaseBtn = document.getElementById('increase');

  let quantity = 1;

  increaseBtn.addEventListener('click', () => {
    quantity++;
    quantityEl.textContent = quantity;
  });
  decreaseBtn.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantityEl.textContent = quantity;
    }
  });
document.addEventListener('DOMContentLoaded', () => {
    const swipArrivals = tns({
      container: '#products-arrivals',
      direction: 'horizontal',
      slideBy: 'page',
      mouseDrag: true,
      controls: false,
      prevButton: false,
      nextButton: false,
      nav: false,
      loop: true,
      arrowKeys:false,
      fixedWidth: 295,
      gutter: 20,
      center: false,
      preventScrollOnTouch: 'force' ,
      responsive: {
        320: {
          edgePadding: 0,
          fixedWidth: 198,
          gutter: 16,
          center: false,
        },
        480: {
          fixedWidth: 250,
          gutter: 16,
          center: false,
          edgePadding: 0,
        },
        750: {
          edgePadding: 0,
          fixedWidth: 295,
          gutter: 16,
          center: false,
        },
        1024: {
          edgePadding: 0,
          fixedWidth: 295,
          gutter: 20,
          center: false,
        },
      },
    });
    const swipSelling = tns({
      container: '#products-selling',
      direction: 'horizontal',
      slideBy: 'page',
      mouseDrag: true,
      controls: false,
      prevButton: false,
      nextButton: false,
      nav: false,
      loop: true,
      arrowKeys:false,
      fixedWidth: 295,
      gutter: 20,
      center: false,
      preventScrollOnTouch: 'force' ,
      responsive: {
        320: {
          edgePadding: 0,
          fixedWidth: 198,
          gutter: 16,
          center: false,
        },
        480: {
          fixedWidth: 250,
          gutter: 16,
          center: false,
          edgePadding: 0,
        },
        750: {
          edgePadding: 0,
          fixedWidth: 295,
          gutter: 16,
          center: false,
        },
        1024: {
          edgePadding: 0,
          fixedWidth: 295,
          gutter: 20,
          center: false,
        },
      }
    });
    const swiper = tns({
      container: '#promotion-slider',
      direction: 'horizontal',
      slideBy: 'page',
      mouseDrag: true,
      controls: false,
      prevButton: false,
      nextButton: false,
      nav: false,
      loop: true,
      arrowKeys:false,
      fixedWidth: 358,
      center: false,
      gutter: 20,
      preventScrollOnTouch: 'force' ,
      responsive: {
        320: {
          items: 1,
          edgePadding: 0,
          fixedWidth: 250,
          gutter: 0,
          center: false,
        },
        390: {
          items: 1,
          fixedWidth: 358,
          gutter: 0,
          edgePadding: 0,
          center: false,
        },
        1024: {
          edgePadding: 0,
          fixedWidth: 400,
          gutter: 0,
          center: false,
        },
      },
    });
    document.getElementById('prevBtn').addEventListener('click', () => {
      swiper.goTo('prev');
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
      swiper.goTo('next');
    });
    document.getElementById('signup-close').addEventListener('click', () => {
      document.getElementById("signup").style.display = "none";
    });
  });