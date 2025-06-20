/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
AOS.init({
  duration: 1000,
  once: true // only run 1 short
});
document.addEventListener('DOMContentLoaded', function () {
  var swipArrivals = tns({
    container: '#products-arrivals',
    direction: 'horizontal',
    slideBy: 'page',
    mouseDrag: true,
    controls: false,
    prevButton: false,
    nextButton: false,
    nav: false,
    loop: true,
    arrowKeys: false,
    fixedWidth: 295,
    gutter: 20,
    center: false,
    preventScrollOnTouch: 'force',
    responsive: {
      320: {
        edgePadding: 0,
        fixedWidth: 198,
        gutter: 16,
        center: false
      },
      480: {
        fixedWidth: 250,
        gutter: 16,
        center: false,
        edgePadding: 0
      },
      750: {
        edgePadding: 0,
        fixedWidth: 295,
        gutter: 16,
        center: false
      },
      1024: {
        edgePadding: 0,
        fixedWidth: 295,
        gutter: 20,
        center: false
      }
    }
  });
  var swipSelling = tns({
    container: '#products-selling',
    direction: 'horizontal',
    slideBy: 'page',
    mouseDrag: true,
    controls: false,
    prevButton: false,
    nextButton: false,
    nav: false,
    loop: true,
    arrowKeys: false,
    fixedWidth: 295,
    gutter: 20,
    center: false,
    preventScrollOnTouch: 'force',
    responsive: {
      320: {
        edgePadding: 0,
        fixedWidth: 198,
        gutter: 16,
        center: false
      },
      480: {
        fixedWidth: 250,
        gutter: 16,
        center: false,
        edgePadding: 0
      },
      750: {
        edgePadding: 0,
        fixedWidth: 295,
        gutter: 16,
        center: false
      },
      1024: {
        edgePadding: 0,
        fixedWidth: 295,
        gutter: 20,
        center: false
      }
    }
  });
  var swiper = tns({
    container: '#promotion-slider',
    direction: 'horizontal',
    slideBy: 'page',
    mouseDrag: true,
    controls: false,
    prevButton: false,
    nextButton: false,
    nav: false,
    loop: true,
    arrowKeys: false,
    fixedWidth: 358,
    center: false,
    gutter: 20,
    preventScrollOnTouch: 'force',
    responsive: {
      320: {
        items: 1,
        edgePadding: 0,
        fixedWidth: 250,
        gutter: 0,
        center: false
      },
      390: {
        items: 1,
        fixedWidth: 358,
        gutter: 0,
        edgePadding: 0,
        center: false
      },
      1024: {
        edgePadding: 0,
        fixedWidth: 400,
        gutter: 0,
        center: false
      }
    }
  });
  document.getElementById('prevBtn').addEventListener('click', function () {
    swiper.goTo('prev');
  });
  document.getElementById('nextBtn').addEventListener('click', function () {
    swiper.goTo('next');
  });
  document.getElementById('signup-close').addEventListener('click', function () {
    document.getElementById("signup").style.display = "none";
  });
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map