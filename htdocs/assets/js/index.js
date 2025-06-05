document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');
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
      center: true,
      responsive: {
        320: {
          edgePadding: 0,
          fixedWidth: 198,
          gutter: 16,
          center: true,
        },
        480: {
          fixedWidth: 250,
          gutter: 16,
          center: true,
          edgePadding: 0,
        },
        750: {
          edgePadding: 0,
          fixedWidth: 295,
          gutter: 20,
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
      center: true,
        320: {
          edgePadding: 0,
          fixedWidth: 198,
          gutter: 16,
          center: true,
        },
        480: {
          fixedWidth: 250,
          gutter: 16,
          center: true,
          edgePadding: 0,
        },
        750: {
          edgePadding: 0,
          fixedWidth: 295,
          gutter: 20,
        },
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
      gutter: 20,
      responsive: {
        320: {
          items: 1,
          edgePadding: 0,
          fixedWidth: 250,
          gutter: 15,
          center: true,
        },
        390: {
          items: 1,
          fixedWidth: 358,
          gutter: 0,
          edgePadding: 0,
        },
        1024: {
          edgePadding: 0,
          fixedWidth: 400,
          gutter: 20,
          center: true,
        },
      },
    });
    document.getElementById('prevBtn').addEventListener('click', () => {
      swiper.goTo('prev');
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
      swiper.goTo('next');
    });
  });