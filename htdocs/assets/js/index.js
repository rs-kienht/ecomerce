document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');
  
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
      fixedWidth: 400,
      gutter: 20,
      center: true,
      // responsive: {
      //   320: {
      //     edgePadding: 0,
      //     fixedWidth: 300,
      //     gutter: 50,
      //     center: true,
      //   },
      //   750: {
      //     fixedWidth: 380,
      //     gutter: 78,
      //     center: true,
      //     edgePadding: 0,
      //   },
      //   1024: {
      //     edgePadding: 0,
      //     fixedWidth: 240,
      //     gutter: 74,
      //   },
      // },
    });
    document.getElementById('prevBtn').addEventListener('click', () => {
      swiper.goTo('prev');
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
      swiper.goTo('next');
    });
  });